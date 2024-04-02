<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DisponibilidadController;
use App\Http\Controllers\CentroController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



// Almacenar un nuevo usuario en la base de datos
Route::post('/users', [UserController::class, 'store'])->name('usuarios.store');

// Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
// Mostrar los detalles de un usuario específico
Route::get('/users/{user}', [UserController::class, 'show'])->name('usuarios.show');

//antes api.php
Route::post('registro',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('user-profile',[AuthController::class,'userProfile']);
    Route::get('logout',[AuthController::class,'logout']);
    });

// Mostrar el formulario para editar un usuario existente
Route::get('/users/edit/{user}', [UserController::class, 'edit'])->name('usuarios.edit');

// Actualizar los detalles de un usuario en la base de datos
Route::put('/users/{user}', [UserController::class, 'update'])->name('usuarios.update');

// Eliminar un usuario de la base de datos
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('usuarios.destroy');

Route::get('/centro', [CentroController::class, 'index'])->name('centro.index');
Route::post('/sacardisponibles', [DisponibilidadController::class, 'obtenerAulaId']);
Route::post('/reservaula', [DisponibilidadController::class, 'reserva']);
Route::get('/csrf-token', function() {
    return response()->json([csrf_token()]);
});
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


require __DIR__.'/auth.php';
