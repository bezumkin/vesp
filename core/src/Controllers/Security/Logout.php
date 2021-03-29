<?php

namespace App\Controllers\Security;

use App\Models\UserToken;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\Controller;

class Logout extends Controller
{
    protected $scope = 'profile';

    public function post(): ResponseInterface
    {
        $data = ['user_id' => $this->user->id, 'token' => $this->request->getAttribute('token')];
        /** @var UserToken $token */
        $user_token = $token = UserToken::query()
            ->where(['user_id' => $this->user->id, 'token' => $this->request->getAttribute('token')])
            ->first();
        if ($user_token) {
            $token->active = false;
            $token->save();
        }

        return $this->success();
    }
}
