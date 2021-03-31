<?php

use Slim\Routing\RouteCollectorProxy;

/** @var Slim\App $app */
$group = $app->group(
    '/api',
    function (RouteCollectorProxy $group) {
        $group->any('/security/login', App\Controllers\Security\Login::class);
        $group->any('/security/logout', App\Controllers\Security\Logout::class);
        $group->any('/user/profile', App\Controllers\User\Profile::class);

        $group->get('/image/{id}', App\Controllers\Image::class);

        $group->group(
            '/admin',
            static function (RouteCollectorProxy $group) {
                $group->any('/users[/{id}]', App\Controllers\Admin\Users::class);
                $group->any('/user-roles[/{id}]', App\Controllers\Admin\UserRoles::class);
            }
        );
    }
);

if (class_exists('\Clockwork\Clockwork')) {
    $group->add(Vesp\Middlewares\Clockwork::class);
    $app->get(
        '/__clockwork/{id:(?:[0-9-]+|latest)}[/{direction:(?:next|previous)}[/{count:\d+}]]',
        Vesp\Controllers\Data\Clockwork::class
    );
}