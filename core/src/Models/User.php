<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Vesp\Models\UserRole;

/**
 * @property int $id
 * @property string $username
 * @property string $password
 * @property string $fullname
 * @property string $email
 * @property int $role_id
 * @property bool $active
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read UserToken[] $tokens
 */
class User extends \Vesp\Models\User
{
    protected $fillable = ['username', 'password', 'fullname', 'email', 'role_id', 'active'];

    public function tokens(): HasMany
    {
        return $this->hasMany(UserToken::class);
    }
}
