<html>
<head>
    <link rel="stylesheet" href="{!! asset('css/incidentes/crear.css') !!}">
</head>
@include('layouts.header')
<div class="container">
    <h1>Crear Incidente</h1>
    <!-- Formulario de creación -->
    <form action="{{ route('incidentes.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="titulo">Título:</label>
            <input type="text" class="form-control" id="titulo" name="titulo" required>
        </div>
        <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" id="descripcion" name="descripcion" rows="4" required></textarea>
        </div>
        <div class="form-group">
            <label for="a_la_fuga">¿A la fuga?</label>
            <select class="form-control" id="a_la_fuga" name="a_la_fuga" required>
                <option value="1">Sí</option>
                <option value="0">No</option>
            </select>
        </div>
        <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input type="text" class="form-control" id="ubicacion" name="ubicacion" required>
        </div>
        
        <!-- Agrega más campos si es necesario -->
        <button type="submit" class="btn btn-primary">Guardar</button>
        <a href="{{ route('incidentes.index') }}" class="btn btn-secondary">Cancelar</a>
    </form>
</div>
@include('layouts.footer')
</html>