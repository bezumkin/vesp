<?php

namespace App\Controllers\Security;

use Psr\Http\Message\ResponseInterface;
use Vesp\Helpers\Jwt;
use App\Models\User;

class Login extends \Vesp\Controllers\Security\Login
{
    protected string $model = User::class;

    public function post(): ResponseInterface
    {

        $username = trim($this->getProperty('username', ''));
        $password = trim($this->getProperty('password', ''));

        /** @var User $user */
        $user = (new $this->model())->newQuery()->where('username', $username)->first();
        if ($user && $user->verifyPassword($password)) {
            if (!$user->active) {
                return $this->failure('errors.security.inactive');
            }
            $token = Jwt::makeToken($user->id);
            if ($decoded = JWT::decodeToken($token)) {
                // Save token to database
                $user->tokens()->create([
                    'user_id' => $decoded->id,
                    'token' => $token,
                    'valid_till' => date('Y-m-d H:i:s', $decoded->exp),
                    'ip' => $this->request->getAttribute('ip_address'),
                ]);
            }

            // Limit active tokens
            if ($max = getenv('JWT_MAX')) {
                $query = $user->tokens()->where('active', true);
                if ($query->count() > $max) {
                    if ($result = $query->orderBy('updated_at')->orderBy('created_at')->first()) {
                        $result->update(['active' => false]);
                    }
                }
            }

            return $this->success(['token' => $token]);
        }

        return $this->failure('errors.security.wrong');
    }

}
