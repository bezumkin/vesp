<?php

declare(strict_types=1);

use Illuminate\Database\Schema\Blueprint;
use Vesp\Services\Migration;

require_once __DIR__ . '/../seeds/SeedUserRoles.php';
require_once __DIR__ . '/../seeds/SeedUsers.php';

final class Users extends Migration
{
    public function up(): void
    {
        $this->schema->create(
            'user_roles',
            static function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->json('scope')->nullable();
                $table->timestamps();

                $table->unique('title');
            }
        );

        $this->schema->create(
            'users',
            static function (Blueprint $table) {
                $table->id();
                $table->foreignId('role_id')
                    ->constrained('user_roles')->cascadeOnDelete();
                $table->string('username');
                $table->string('password');
                $table->string('fullname')->nullable();
                $table->string('email')->nullable();
                $table->boolean('active')->default(true);
                $table->boolean('blocked')->default(false);
                $table->timestamps();
                $table->timestamp('active_at')->nullable();

                $table->unique('username');
                $table->index('active');
            }
        );

        $this->schema->create(
            'user_tokens',
            static function (Blueprint $table) {
                $table->string('token');
                $table->foreignId('user_id')
                    ->constrained('users')->cascadeOnDelete();
                $table->timestamp('valid_till');
                $table->string('ip', 16)->nullable();
                $table->boolean('active')->default(true);
                $table->timestamps();

                $table->primary('token');
                $table->index('valid_till');
                $table->index(['token', 'active']);
            }
        );

        if ($adapter = $this->getAdapter()) {
            $input = $this->getInput();
            $output = $this->getOutput();
            new SeedUserRoles()->setAdapter($adapter)->setInput($input)->setOutput($output)->run();
            new SeedUsers()->setAdapter($adapter)->setInput($input)->setOutput($output)->run();
        }
    }


    public function down(): void
    {
        $this->schema->drop('user_tokens');
        $this->schema->drop('users');
        $this->schema->drop('user_roles');
    }
}
