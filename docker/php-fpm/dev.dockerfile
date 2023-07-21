ARG PHP_VERSION=${PHP_VERSION}

FROM php:${PHP_VERSION}-fpm-alpine
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

RUN apk update && apk upgrade
RUN apk add --update linux-headers
RUN apk add build-base autoconf libzip-dev libpng-dev libjpeg-turbo-dev libwebp-dev imagemagick-dev bash

RUN pecl install imagick && docker-php-ext-enable imagick
RUN docker-php-ext-configure gd --with-jpeg --with-webp && docker-php-ext-install gd
RUN docker-php-ext-install exif
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo_mysql
RUN yes | pecl install xdebug \
    && echo "zend_extension=xdebug" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.mode=develop,debug" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.client_host=host.docker.internal" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.log_level=0" >> /usr/local/etc/php/conf.d/xdebug.ini

RUN echo "memory_limit=128M" > /usr/local/etc/php/conf.d/docker-php-ext-memory.ini
RUN echo "max_file_uploads=100M" > /usr/local/etc/php/conf.d/docker-php-ext-upload.ini \
  && echo "post_max_size=100M" >> /usr/local/etc/php/conf.d/docker-php-ext-upload.ini \
  && echo "upload_max_filesize=100M" >> /usr/local/etc/php/conf.d/docker-php-ext-upload.ini
