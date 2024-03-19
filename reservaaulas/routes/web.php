<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CentroController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/centros', [CentroController::class, 'index']);