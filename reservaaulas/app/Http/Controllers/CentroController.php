<?php

namespace App\Http\Controllers;
use App\Models\centro;
use Illuminate\Http\Request;

class CentroController extends Controller
{
    public function index()
    {
        $centros = centro::all();
        return response()->json($centros);
    }
}
