ARG PHP_VERSION=${PHP_VERSION}

FROM php:${PHP_VERSION}-fpm-alpine
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apk update && apk upgrade
RUN apk add build-base autoconf libzip-dev libpng-dev libjpeg-turbo-dev libwebp-dev bash

RUN pecl install xdebug-3.1.0
RUN docker-php-ext-configure gd --with-jpeg --with-webp && docker-php-ext-install gd
RUN docker-php-ext-install exif
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo_mysql

WORKDIR /vesp
CMD composer install && php-fpm