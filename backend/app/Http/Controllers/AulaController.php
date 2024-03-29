<?php

namespace App\Http\Controllers;

use App\Models\aula;
use Illuminate\Http\Request;

class AulaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $aulas = aulas::all();
        return response()->json($aulas);
    }

    public function obtenerAulasExcepto($aulaId)
    {
        $aulas = Aula::where('id', '!=', $aulaId)->get();
        return response()->json($aulas);
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
    public function show(aula $aula)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(aula $aula)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, aula $aula)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(aula $aula)
    {
        //
    }
}
