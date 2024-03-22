<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aula;

class DisponibilidadController extends Controller
{
    public function obtenerAulaId(Request $request, AulaController $aulaController)
    {
        // Validar los datos recibidos en la solicitud
        $request->validate([
            'hora' => 'required',
            'dia' => 'required',
            'centro' => 'required',
        ]);

        // Obtener los datos de la solicitud
        $hora = $request->input('hora');
        $dia = $request->input('dia');
        $centro = $request->input('centro');

        // Buscar el ID del aula que coincida con la hora, el día y el centro
        $aulaId = Aula::where('hora', $hora)
                    ->where('dia', $dia)
                    ->where('id_centro', $centro)
                    ->value('id');

        // Verificar si se encontró el ID del aula
        if ($aulaId) {
            // Obtener todas las aulas excepto la que coincida con el ID
            $aulasExcepto = $aulaController->obtenerAulasExcepto($aulaId);

            

            return response()->json(['aulas'=>$aulasExcepto]);
        } else {
            return response()->json(['message' => 'No se encontró un aula disponible para la hora, día y centro especificados'], 404);
        }
    }
}
