<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Incidente extends Model
{
    use HasFactory;

    protected $table = 'incidente';

    protected $fillable = [
        'titulo',
        'descripcion',
        'fecha',
        'a_la_fuga',
        'ubicacion',
        'user_id',
    ];

    protected $casts = [
        'a_la_fuga' => 'boolean', // Esto convierte el campo a_la_fuga en un tipo booleano
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}