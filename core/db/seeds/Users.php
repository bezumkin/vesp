<?php

use App\Models\User;
use Phinx\Seed\AbstractSeed;

class Users extends AbstractSeed
{
    public function getDependencies(): array
    {
        return ['UserRoles'];
    }

    public function run(): void
    {
        $users = [
            'admin' => [
                'password' => 'admin',
                'fullname' => 'Admin',
                'role_id' => 1,
            ],
            'user' => [
                'password' => 'user',
                'fullname' => 'User',
                'role_id' => 2,
            ],
        ];

        foreach ($users as $username => $data) {
            if (!$user = User::query()->where('username', $username)->first()) {
                $user = new User(['username' => $username]);
            }
            $user->fill($data);
            $user->save();
        }
    }
}
