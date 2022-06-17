<?php

namespace App\Controllers\Admin;

use App\Models\UserRole;
use Illuminate\Database\Eloquent\Builder;
use Vesp\Controllers\ModelController;

class UserRoles extends ModelController
{
    protected $scope = 'users';
    protected $model = UserRole::class;

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = $this->getProperty('query')) {
            $c->where('title', 'LIKE', "%$query%");
        }

        return $c;
    }
}
