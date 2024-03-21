<html>
    <head>
    <link rel="stylesheet" href="{!! asset('css/incidentes/ver.css') !!}">
    </head>

@include('layouts.header')
@auth
<div class="container">
    <h1>Listado de Incidentes</h1>
    @if(session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
    @endif
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th>Título</th>
                <th>Fecha</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($incidentes as $incidente)
                <tr>
                    <td>{{ $incidente->titulo }}</td>
                    <td>{{ $incidente->fecha }}</td>
                    <td>
                        <a href="{{ route('incidentes.show', $incidente->id) }}" class="btn btn-primary">Ver</a>
                        
                            <a href="{{ route('incidentes.edit', $incidente->id) }}" class="btn btn-warning">Editar</a>
                            @if (Auth::user()->roles == 'Oficial')
                        <form action="{{ route('incidentes.destroy', $incidente->id) }}" method="POST" style="display: inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger" onclick="return confirm('¿Estás seguro?')">Eliminar</button>
                        </form>
                        @endif
                        
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <a href="{{ route('incidentes.create') }}" class="btn btn-success">Crear Incidente</a>
   
</div>
@endauth
@include('layouts.footer')
</html>