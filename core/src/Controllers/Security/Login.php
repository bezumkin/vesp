<?php

namespace App\Controllers\Security;

use App\Models\UserToken;
use Psr\Http\Message\ResponseInterface;
use Vesp\Helpers\Jwt;

class Login extends \Vesp\Controllers\Security\Login
{
    public function post(): ResponseInterface
    {
        $response = parent::post();
        $code = $response->getStatusCode();
        if ($code === 200) {
            $token = json_decode($response->getBody()->__toString(), false)->token;
            if ($decoded = JWT::decodeToken($token)) {
                // Save token to database
                (new UserToken(
                    [
                        'user_id' => $decoded->id,
                        'token' => $token,
                        'valid_till' => date('Y-m-d H:i:s', $decoded->exp),
                        'ip' => $this->request->getAttribute('ip_address'),
                    ]
                ))->save();

                // Limit active tokens
                if ($max = getenv('JWT_MAX')) {
                    $query = UserToken::query()->where(['user_id' => $decoded->id, 'active' => true]);
                    if ($query->count() > $max) {
                        if ($result = $query->orderBy('updated_at')->orderBy('created_at')->first()) {
                            $result->update(['active' => false]);
                        }
                    }
                }
            }
        } else {
            if ($code === 403) {
                return $this->failure('errors.security.inactive');
            }
            if ($code === 422) {
                return $this->failure('errors.security.wrong');
            }
        }

        return $response;
    }

}
