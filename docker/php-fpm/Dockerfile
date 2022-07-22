ARG PHP_VERSION=${PHP_VERSION}

FROM php:${PHP_VERSION}-fpm-alpine

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apk update && apk upgrade
RUN apk add build-base autoconf libzip-dev libpng-dev bash

RUN pecl install xdebug
RUN docker-php-ext-install gd
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo_mysql