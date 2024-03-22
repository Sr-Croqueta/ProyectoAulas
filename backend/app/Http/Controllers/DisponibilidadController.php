<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aula;
use App\Models\Centro;
use App\Models\Disponibilidad;
use Illuminate\Support\Facades\Validator;

class DisponibilidadController extends Controller
{
    public function obtenerAulaId(Request $request)
{
    // Obtener datos JSON de la solicitud
    $data = $request->json()->all();

    // Validar los datos recibidos en la solicitud
    $validator = Validator::make($data, [
        'hora' => 'required',
        'dia' => 'required',
        'centro' => 'required',
    ]);

    // Verificar si la validación falla
    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Obtener los datos de la solicitud
    $hora = $data['hora'];
    $dia = $data['dia'];
    $centro = $data['centro'];

    try {
        // Buscar los registros de disponibilidad para la hora, día y centro especificados
        $disponibilidades = Disponibilidad::where('hora', $hora)
            ->whereDate('dia', $dia)
            ->get();

        // Array para almacenar los IDs de aula
        $aulaIds = [];
        

        // Recorrer los registros de disponibilidad y guardar los IDs de aula
        foreach ($disponibilidades as $disponibilidad) {
            $aulaIds[] = $disponibilidad->id_aula;
        }
        
        // Obtener las aulas que no coincidan con los IDs obtenidos y el centro especificado
        $aulasExcepto = Aula::whereNotIn('id', $aulaIds)
            ->where('id_centro', $centro)
            ->get();

        // Devolver la respuesta con las aulas encontradas
        return response()->json([ $aulasExcepto]);
    } catch (\Exception $e) {
        // Manejo de errores
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

    public function index()
    {
        // Aquí puedes colocar la lógica para mostrar una lista de recursos
        // Por ejemplo, obtener y devolver todos los registros de disponibilidad
        $disponibilidades = Disponibilidad::all();

        // Puedes devolver los datos en formato JSON si así lo necesitas
        return response()->json($disponibilidades);
    }
}