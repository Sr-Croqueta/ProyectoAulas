<html>
<head>
    <link rel="stylesheet" href="{!! asset('css/patrullas/ver.css') !!}"> 
</head>
@include('layouts.header')
@auth
<div class="container">
    <h1>Detalles de la Patrulla</h1>
    @if(session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
    @endif
    <table>
        <tr>
            <th>Identificador</th>
            <th>Matrícula</th>
            <th>Vehículo</th>
            @if(Auth::user()->roles == 'Oficial')
            <th>Opciones</th>
            @endif
        </tr>
        @foreach ($patrullas as $patrulla)
        <tr>
            <td>{{ $patrulla->id }}</td>
            <td>{{ $patrulla->matricula }}</td>
            <td>{{ $patrulla->vehiculo }}</td>
            
            @if(Auth::user()->roles == 'Oficial')
            <td><a href="{{ url('/patrulla/edit/'.$patrulla->id) }}" class="btn btn-primary">Editar</a>
            <a href="{{ url('/patrulla/borrar/'.$patrulla->id) }}" class="btn btn-danger">Eliminar</a></td>
            @endif
            
        </tr>
        @endforeach
    </table>
    
        
    @if(Auth::user()->roles == 'Oficial')
   <a class="btn" id="crear" href="{{ url('/patrulla/create') }}">Crear Patrulla</a>
   @endif
   @endauth
</div>
@include('layouts.footer')
</html>