<?php

use Slim\Routing\RouteCollectorProxy;

/** @var Slim\App $app */
$group = $app->group(
    '/api',
    function (RouteCollectorProxy $group) {
        $group->group(
            '/security',
            static function (RouteCollectorProxy $group) {
                $group->any('/login', App\Controllers\Security\Login::class);
                $group->any('/logout', App\Controllers\Security\Logout::class);
            }
        );

        $group->any('/user/profile', App\Controllers\User\Profile::class);
        $group->get('/image/{id}', App\Controllers\Image::class);

        $group->group(
            '/admin',
            static function (RouteCollectorProxy $group) {
                $group->any('/users[/{id}]', App\Controllers\Admin\Users::class);
                $group->any('/user-roles[/{id}]', App\Controllers\Admin\UserRoles::class);
            }
        );

        /*
        $group->group(
            '/web',
            static function (RouteCollectorProxy $group) {
            }
        );
        */
    }
);

if (class_exists('\Clockwork\Clockwork')) {
    $group->add(Vesp\Middlewares\Clockwork::class);
    $app->get(
        '/__clockwork/{id:(?:[0-9-]+|latest)}[/{direction:(?:next|previous)}[/{count:\d+}]]',
        Vesp\Controllers\Data\Clockwork::class
    );
    if (function_exists('xdebug_get_profiler_filename')) {
        $app->get('/__clockwork/{id:[0-9-]+}/extended', Vesp\Controllers\Data\Clockwork::class);
    }
}