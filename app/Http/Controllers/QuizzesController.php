<?php

namespace Bettergrade\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Bettergrade\Models\Quiz;

class ProfileController extends Controller
{
    /**
     * Display a list of all available quizzes.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Quizzes\All', ['quizzes' => Quiz::get()]);
    }
}
