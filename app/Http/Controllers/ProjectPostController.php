<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $projectId)
    {

        $projectPosts = [
            [
                "id" => 1,
                "name" => "MyFirstPost",
                "description" => "Ini Post Pertama Saya",
                "liked" => 1,
                "commented" => 1,
                "created_by" => [
                    "name" => "Bima"
                ],
                "created_at" => "05-02-2024 20:14",
                "thumbnail" => "https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            [
                "id" => 2,
                "name" => "My Second Post for this week",
                "description" => "Bima Ganteng baget 123 banyak yang sukakkk",
                "liked" => 4,
                "commented" => 21,
                "created_by" => [
                    "name" => "Bima"
                ],
                "created_at" => "05-02-2024 20:14",
                "thumbnail" => "https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]
        ];

        return Inertia::render('Projects/Posts/List', [
            "active_nav" => "side-post",
            "project" => Projects::find($projectId),
            "projectPosts" => $projectPosts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
