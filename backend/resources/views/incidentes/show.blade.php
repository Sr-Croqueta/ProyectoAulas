<html>
    <head>
    <link rel="stylesheet" href="{!! asset('css/incidentes/ver.css') !!}">
    </head>

@include('layouts.header')
<div class="container">
        <h1>Detalles del Incidente</h1>
        <div class="info">
        <p><strong>Título:</strong> {{ $incidente->titulo }}</p>
        <p><strong>Descripción:</strong> {{ $incidente->descripcion }}</p>
        <p><strong>A la fuga:</strong> {{ $incidente->a_la_fuga }}</p>
        <p><strong>Fecha:</strong> {{ $incidente->fecha }}</p>
        <p><strong>Ubicación:</strong> {{ $incidente->ubicacion }}</p>
        <!-- Muestra otros detalles del incidente aquí -->
        <a href="{{ route('incidentes.index') }}" class="btn btn-secondary">Volver</a>
        </div>
    </div>
    @include('layouts.footer')
    </html>