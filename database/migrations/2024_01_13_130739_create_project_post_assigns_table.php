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
        Schema::create('project_post_assigns', function (Blueprint $table) {
            $table->id();
            $table->softDeletes();
            $table->timestamps();

            // Foreign Field
            $table->unsignedBigInteger('post_id')->nullable(false);
            $table->unsignedBigInteger('user_project_id')->nullable(false);
            $table->unsignedBigInteger('added_by')->nullable(false);

            // Foreign Key
            $table->foreign('post_id')->references('id')->on('project_posts');
            $table->foreign('user_project_id')->references('id')->on('user_projects');
            $table->foreign('added_by')->references('id')->on('user_projects');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_post_assigns');
    }
};
