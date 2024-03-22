import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentroService } from '../centros.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Asegúrate de importar HttpClientModule aquí
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  providers: [CentroService] // Proporciona el servicio localmente
})
export class ResultadosComponent {
  aulas: any[] = [];
  state: any;

  constructor(public centros: CentroService, private router: Router) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
    
      const [horaSeleccionada, fechaSeleccionada, centroSeleccionado] = this.state;
      this.centros.obtenerAulasDisponibles(horaSeleccionada, fechaSeleccionada, centroSeleccionado);
    console.log(this.centros)
  }

}