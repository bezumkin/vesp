<?php

namespace App\Middlewares;

use App\Models\User;
use App\Models\UserToken;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;


class Auth extends \Vesp\Middlewares\Auth
{
    protected $model = User::class;

    public function __invoke(Request $request, RequestHandler $handler): ResponseInterface
    {
        if ($token = $this->getToken($request)) {
            /** @var UserToken $user_token */
            $user_token = UserToken::query()
                ->where(['token' => $token->token, 'active' => true])
                ->first();
            if ($user_token) {
                if ($user_token->valid_till->toDateTimeString() > date('Y-m-d H:i:s')) {
                    /** @var User $user */
                    if ($user = $user_token->user()->where('active', true)->first()) {
                        $request = $request->withAttribute('user', $user);
                        $request = $request->withAttribute('token', $token->token);
                    }
                } else {
                    $user_token->active = false;
                    $user_token->save();
                }
            }
        }

        return $handler->handle($request);
    }

}
