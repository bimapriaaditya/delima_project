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
        Schema::create('project_post_comments', function (Blueprint $table) {
            $table->id();
            $table->longText('comment');
            $table->softDeletes();
            $table->timestamps();

            // Foreign Field
            $table->unsignedBigInteger('user_id')->nullable(false);
            $table->unsignedBigInteger('post_id')->nullable(false);
            $table->unsignedBigInteger('reply_id');

            // Foreign Key
            $table->foreign('user_id')->references('id')->on('user_projects');
            $table->foreign('post_id')->references('id')->on('project_posts');
            $table->foreign('reply_id')->references('id')->on('project_post_comments');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_post_comments');
    }
};
