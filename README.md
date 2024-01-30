# Vesp Framework 

based on top of [Vue], [Eloquent], [Slim] and [Phinx]. 

```sh
git clone https://github.com/bezumkin/vesp.git
cd ./vesp
cp .env.dist .env
docker compose up
```

This will run containers in production mode.

Open http://127.0.0.1:8080 and login with login and password `admin`.

## Development

Copy `docker-compose.override.yml.dist` into `docker-compose.override.yml` and run `docker compose up --build`.

You will get frontend running in development mode with Hot Module Replacement and opened local ports for containers.

To enable Xdebug, set variable `PHP_XDEBUG=1` in `.env` file and rebuild containers.

## Screenshots

![Screenshot 2024-01-26 at 12 15 06](https://github.com/bezumkin/vesp/assets/1257284/648f508f-8852-4a57-a958-a109e0b28b48)

![Screenshot 2024-01-26 at 12 15 18](https://github.com/bezumkin/vesp/assets/1257284/4a726e79-7852-49b5-89dd-7c76f5fafcfd)

[Vue]:https://vuejs.org
[Eloquent]:https://laravel.com/docs/10.x/eloquent
[Slim]:https://www.slimframework.com/
[Phinx]:https://book.cakephp.org/phinx/0/en/index.html

