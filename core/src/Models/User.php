<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $role_id
 * @property string $username
 * @property string $password
 * @property string $fullname
 * @property string $email
 * @property bool $active
 * @property bool $blocked
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $active_at
 *
 * @property-read UserToken[] $tokens
 */
class User extends \Vesp\Models\User
{
    protected $fillable = ['username', 'password', 'fullname', 'email', 'role_id', 'active', 'blocked', 'active_at'];
    protected $casts = [
        'active' => 'boolean',
        'blocked' => 'boolean',
        'active_at' => 'datetime',
    ];

    public function tokens(): HasMany
    {
        return $this->hasMany(UserToken::class);
    }
}
