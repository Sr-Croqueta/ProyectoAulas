<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Models\Incidente;
use Carbon\Carbon;

class IncidenteController extends Controller
{
    // Método para mostrar todos los incidentes
    public function index()
    {
        $incidentes = Incidente::all();
        return view('incidentes.index', compact('incidentes'));
    }

    // Método para mostrar el formulario de creación de incidentes
    public function create()
    {
        return view('incidentes.create');
    }

    // Método para almacenar un nuevo incidente
    public function store(Request $request)
{
    $request->validate([
        'titulo' => 'required|string|max:255',
        'descripcion' => 'required|string',
        'a_la_fuga' => 'required|boolean',
        'ubicacion' => 'required|string|max:255',
    ]);

    $userId = Auth::id();

    Incidente::create([
        'titulo' => $request->titulo,
        'descripcion' => $request->descripcion,
        'fecha' => Carbon::now()->toDateTimeString(), // Establecer la fecha actual como la fecha del incidente
        'a_la_fuga' => $request->a_la_fuga,
        'ubicacion' => $request->ubicacion,
        'user_id' => $userId, // Asignar el ID del usuario actual
    ]);

    return redirect()->route('incidentes.index')->with('success', 'Incidente creado exitosamente.');
}

    // Método para mostrar un incidente específico
    public function show(Incidente $incidente)
    {
        return view('incidentes.show', compact('incidente'));
    }

    // Método para mostrar el formulario de edición de un incidente
    public function edit(Incidente $incidente)
{
    // Verificar si el usuario actual puede editar el incidente
    if (Gate::allows('editar-incidente', $incidente)) {
        return view('incidentes.edit', compact('incidente'));
    } else {
        abort(403, 'No tienes permiso para acceder a esta página.');
    }
}

    // Método para actualizar un incidente existente
    public function update(Request $request, Incidente $incidente)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'a_la_fuga' => 'required|boolean',
            'ubicacion' => 'required|string|max:255',
            'user_id' => 'required|exists:users,id',
        ]);

        $incidente->update($request->all());

        return redirect()->route('incidentes.index')->with('success', 'Incidente actualizado exitosamente.');
    }

    // Método para eliminar un incidente
    public function destroy(Incidente $incidente)
    {
        $incidente->delete();

        return redirect()->route('incidentes.index')->with('success', 'Incidente eliminado exitosamente.');
    }
}