<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('project_posts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->nullable(false);
            $table->longText('description');
            $table->string('thumbnail', 255);
            $table->boolean('is_closed')->default(false)->nullable(false);
            $table->integer('liked')->default(0)->nullable(false);
            $table->integer('commented')->default(0)->nullable(false);
            $table->softDeletes();
            $table->timestamps();

            // Foreign Field
            $table->unsignedSmallInteger('post_type_id')->nullable(false);
            $table->unsignedBigInteger('created_by')->nullable(false);
            $table->unsignedBigInteger('project_id')->nullable(false);
            $table->unsignedBigInteger('prev_post_id')->nullable(false);
            $table->unsignedBigInteger('next_post_id')->nullable(false);

            // Foreign Key
            $table->foreign('post_type_id')->references('id')->on('post_types');
            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('project_id')->references('id')->on('projects');
            $table->foreign('prev_post_id')->references('id')->on('project_posts');
            $table->foreign('next_post_id')->references('id')->on('project_posts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_posts');
    }
};
