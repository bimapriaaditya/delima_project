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
        Schema::create('project_labels', function (Blueprint $table) {
            $table->id();
            $table->string('name', 75)->nullable(false);
            $table->string('bg_color', 50)->default('rgb(0,0,0,1)')->nullable(false);
            $table->string('text_color', 50)->default('rgb(255,255,255,1)')->nullable(false);
            $table->boolean('use_point')->default(false)->nullable(false);
            $table->integer('point')->default(0);
            $table->mediumText('style_css');
            $table->softDeletes();
            $table->timestamps();

            // Foreign Field
            $table->unsignedBigInteger('created_by')->nullable(false);
            $table->unsignedBigInteger('project_id')->nullable(false);

            // Foreign Key
            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('project_id')->references('id')->on('projects');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_labels');
    }
};
