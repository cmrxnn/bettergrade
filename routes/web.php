<?php

use Inertia\Inertia;
use Bettergrade\Http\Controllers;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Controllers\BaseController::class, 'index'])->name('api:index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('api:dashboard');

Route::prefix('/quizzes')->group(function () {
    Route::get('/', [Controllers\QuizzesController::class, 'index'])->name('api:quizzes.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [Controllers\ProfileController::class, 'edit'])->name('api:profile.edit');
    Route::patch('/profile', [Controllers\ProfileController::class, 'update'])->name('api:profile.update');
    Route::delete('/profile', [ControllersProfileController::class, 'destroy'])->name('api:profile.destroy');
});

require __DIR__.'/auth.php';
