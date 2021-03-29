Пример создания сайта с использованием библиотеки [vesp/core][vesp]

### Установка

Клонируйте репозиторий и зайдите в `core`

```sh
git clone https://github.com/bezumkin/vesp.git
cd ./vesp/core
```

Переименуйте `.env.dist` в `.env` и укажите в нём правильные настройки подключения к базе данных.

```sh
mv .env.dist .env
nano .env
```

Установите зависимости через `composer` и запустите миграции:

```sh
composer install --no-dev
./vendor/bin/phinx migrate && ./vendor/bin/phinx seed:run
```

Соберите `frontend` приложение:

```sh
cd ../frontend && npm install
npm run generate
```
Всё готово, осталось только открыть сайт снаружи. Для этого нужно настроить веб-сервер, чтобы он обслуживал запросы
к `/api` через `www/index.php`, а все остальные искал среди файлов в директории `frontend/dist`.

Примерная конфигурация для Nginx:

```nginx
location ~ ^/api/(.*)$ {
    root /home/path/to/www/;
    try_files $uri /api.php;
}

location / {
    root /home/path/to/built/frontend/dist/;
    try_files $uri /200.html;
}

location ~* ^.+\.(jpg|jpeg|gif|css|png|js|ico|bmp|ttf|woff|woff2|svg)$ {
    root /home/path/to/built/frontend/dist/;
    access_log off;
    log_not_found off;
    expires 10d;
    break;
}
```

В `www/api.php` прописана инициализация Slim 4 и подключение маршрутов из `core/routes.php`.

### Отличия от vesp/core

Этот пример расширяет базовую библиотеку и добавляет хранение JWT в базе данных через модель `UserToken`.

Также модель `User` содержит дополнительные поля:
- fullname
- email

### SPA приложение

В директории `frontend` лежат исходники приложения, написанного на [Vue.js][vue] + [Nuxt.js][nuxt].

Функционал минимальный:
- JWT аутентификация
- Редактирование пользователей и групп

Интерфейс строится через [BootstrapVue][b-vue], иконки от [Fontawesome][fa].
В будущем планируется выделить это приложение в отдельный репозиторий для более удобного расширения.


[vesp]: https://github.com/bezumkin/vesp-core
[vue]: https://vuejs.org
[nuxt]: https://nuxtjs.org
[b-vue]: https://bootstrap-vue.js.org
[fa]: https://fontawesome.com
