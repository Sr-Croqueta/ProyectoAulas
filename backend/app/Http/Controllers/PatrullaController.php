<?php

namespace App\Http\Controllers;
use App\Repositories\PatrullaRepository;
use Illuminate\Http\Request;
use App\Models\Patrulla;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use App\Models\User;
class PatrullaController extends Controller
{

    protected $patrullas;

    public function __construct(PatrullaRepository $patrullas){
        $this->patrullas= $patrullas;
    }
    public function index()
    {
        $patrullas = $this->patrullas->getAll();
        
        return response()->json($patrullas);


    }

    public function create()
    {
        if (Gate::allows('create', User::class)) {
        return view('patrulla/patrulla-create');
    } else {
        abort(403, 'No tienes permiso para acceder a esta página.');
    }
    }

    public function store(Request $request)
{
    $request->validate([
        'matricula' => [
            'required',
            'string',
            'unique:patrulla,matricula',
            'regex:/^\d{4}[a-zA-Z]{3}$/',
        ],
        'vehiculo' => 'required',
    ]);

    Patrulla::create($request->all());

    return redirect()->route('patrulla.show')->with('success', 'Patrulla creada correctamente.');
}

    public function showOne($matricula)
    {
        $patrulla = Patrulla::find($matricula);
        return view('patrulla.showOne', compact('patrulla'));
    }

    public function showAll()
    {
    }

    public function edit($matricula)
    {
        $patrulla = Patrulla::find($matricula);
        return view('patrulla.edit', compact('patrulla'));
    }

    public function update(Request $request, $id)
    {
        $patrulla = Patrulla::find($id);

        // Verificamos si la matrícula que se está editando es la misma que la original
        if ($request->matricula == $patrulla->matricula) {
            $request->validate([
                'matricula' => [
                    'required',
                    'string',
                    'regex:/^\d{4}[a-zA-Z]{3}$/',
                ],
                'vehiculo' => 'required',
            ]);
        } else {
            // Si la matrícula es diferente, entonces aplicamos la validación de unicidad
            $request->validate([
                'matricula' => [
                    'required',
                    'string',
                    'unique:patrulla,matricula',
                    'regex:/^\d{4}[a-zA-Z]{3}$/',
                ],
                'vehiculo' => 'required',
            ]);
        }

        $patrulla->update($request->all());

        return redirect()->route('patrulla.show')->with('success', 'Patrulla actualizada correctamente.');
    }
    public function destroy($id)
    {
        $patrulla = Patrulla::find($id);
        DB::table('users')->where('patrulla_id', $id)->update(['patrulla_id' => null]);
        $patrulla->delete();

        return redirect()->route('patrulla.show')->with('success', 'Patrulla eliminada correctamente.');
    }
}
