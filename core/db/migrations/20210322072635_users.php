<?php

use Illuminate\Database\Schema\Blueprint;
use Vesp\Services\Migration;

class Users extends Migration
{

    public function up(): void
    {
        $this->schema->create(
            'user_roles',
            function (Blueprint $table) {
                $table->id();
                $table->string('title')->unique();
                $table->json('scope')->nullable();
                $table->timestamps();
            }
        );

        $this->schema->create(
            'users',
            function (Blueprint $table) {
                $table->id();
                $table->string('username')->unique();
                $table->string('password');
                $table->string('fullname')->nullable();
                $table->string('email')->nullable();
                $table->foreignId('role_id')
                    ->constrained('user_roles')->onDelete('cascade');
                $table->boolean('active')->default(true)->index();
                $table->timestamps();
            }
        );

        $this->schema->create(
            'user_tokens',
            function (Blueprint $table) {
                $table->string('token')->primary();
                $table->foreignId('user_id')
                    ->constrained('users')->onDelete('cascade');
                $table->timestamp('valid_till')->index();
                $table->string('ip', 16)->nullable();
                $table->boolean('active')->default(true);
                $table->timestamps();

                $table->index(['token', 'user_id', 'active']);
            }
        );
    }


    public function down(): void
    {
        $this->schema->drop('user_tokens');
        $this->schema->drop('users');
        $this->schema->drop('user_roles');
    }
}
