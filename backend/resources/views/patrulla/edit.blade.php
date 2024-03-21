<html>
<head>
<link rel="stylesheet" href="{!! asset('css/patrullas/editar.css') !!}">
</head>
@include('layouts.header')
<div class="container">
    <h1>Editar Patrulla</h1>

    @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    
    <form action="{{ route('patrulla.update', $patrulla->id) }}" method="POST">
        @csrf
        @method('PUT')
        
        <div class="form-group">
            <label for="matricula">Matrícula:</label>
            <input type="text" id="matricula" name="matricula" value="{{ $patrulla->matricula }}" class="form-control" >
        </div>

        <div class="form-group">
            <label for="vehiculo">Vehículo:</label>
            <input type="text" id="vehiculo" name="vehiculo" value="{{ $patrulla->vehiculo }}" class="form-control">
        </div>

        {{-- Agrega más campos según las propiedades de tu modelo Patrulla --}}

        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
    </form>
    
    {{-- Añade botón de cancelar o regresar a la página anterior --}}
    <a href="{{ url('/') }}" class="btn btn-secondary">Cancelar</a>
</div>
@include('layouts.footer')
</html>