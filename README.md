# Vesp Framework 

based on top of [Vue], [Eloquent], [Slim] and [Phinx]. 

## Requirements

- PHP 8.1+ with Composer
- Node JS 18+ with Npm
- Nginx or Apache2

## Quick Start

Instructions has been tested on **Ubuntu 20.04 LTS** with packages from official repository.
We will imagine that you setup new project for user `vesp` in directory `/home/vesp/project`.

Login to your server with SSH and create a new project with composer:
```shell
composer create-project vesp/vesp ~/project --no-dev --remove-vcs
```

Wait until composer download all packages and then edit `.env` in the root of `~/project`. 
Specify credentials for connection to the local database.

Then create basic tables and users:
```shell
composer db:migrate
composer db:seed
```

Generate static frontend pages:
```shell
composer node:generate
```

Then you need to setup your webserver. You have at least 2 options: **Nginx** (recommended) and **Apache2**.

### Nginx + PHP-FPM
Webserver and PHP run separately, as 2 services.

Php-fpm config `/etc/php/7.4/fpm/pool.d/vesp.conf`:
```ini
[vesp]
listen = 127.0.0.1:10005

listen.owner = vesp
listen.group = vesp
listen.mode = 0660
listen.allowed_clients = 127.0.0.1

user = vesp
group = vesp

chdir = /home/vesp/project

pm = dynamic
pm.max_children = 4
pm.start_servers = 2
pm.min_spare_servers = 2
pm.max_spare_servers = 4
```

Nginx config `/etc/nginx/sites-enabled/vesp.conf`:
```nginx
upstream backend-vesp {
    server 127.0.0.1:10005;
}

server {
    listen 80;
    server_name your-vesp-site.com;
    root /home/vesp/project/www;

    location ~ ^/(api|__clockwork)/ {
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_pass  backend-vesp;
        rewrite .* /api.php;
        break;
    }

    location ~ ^/admin$ {
        return 302 $uri/;
    }

    location ~ ^/admin/ {
        root /home/vesp/project/frontend/dist/;
        try_files $uri /admin/200.html;
    }

    location / {
        root /home/vesp/project/frontend/dist/site/;
        try_files $uri /200.html;
    }
}
```

### Apache2

First of all, Apache2 should have `mod_rewrite` enabled. Site config in `/etc/apache2/sites-enabled/vesp.conf`
```apacheconf
<VirtualHost *:80>
    ServerName your-vesp-site.com
    DocumentRoot /home/vesp/project/www

    <Directory />
        Require all granted
        AllowOverride All
    </Directory>
</VirtualHost>
```

Apache2 can't serve files from different roots, so you need to add symlink for generated files:

```bash
ln -s ~/project/frontend/dist ~/project/www
```

And finally rename `~/project/www/.ht.access` to `~/project/www/.htaccess`.

## Credentials

Now you should see your project at specified domain (`your-vesp-site.com` in this readme). 
Go to `/admin` address to manager users.

Default login is `admin` with password `admin`.

## Development

You can run local development server with `composer node:dev` command.


[Vue]:https://vuejs.org
[Eloquent]:https://laravel.com/docs/10.x/eloquent
[Slim]:https://www.slimframework.com/
[Phinx]:https://book.cakephp.org/phinx/0/en/index.html

