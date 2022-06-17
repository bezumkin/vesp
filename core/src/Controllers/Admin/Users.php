<?php

namespace App\Controllers\Admin;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Vesp\Controllers\ModelController;

class Users extends ModelController
{
    protected $scope = 'users';
    protected $model = User::class;

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = $this->getProperty('query')) {
            $c->where(
                static function (Builder $c) use ($query) {
                    $c->where('username', 'LIKE', "%$query%");
                    $c->orWhere('fullname', 'LIKE', "%$query%");
                }
            );
        }

        return $c;
    }

    protected function afterCount(Builder $c): Builder
    {
        $c->with('role:id,title');

        return $c;
    }
}