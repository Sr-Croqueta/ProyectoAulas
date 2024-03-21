import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CentroService } from '../centros.service';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Asegúrate de importar HttpClientModule aquí
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  providers: [CentroService] // Proporciona el servicio localmente
})
export class SelectorComponent {
  centr: any[] = [];
  horas: number[] = [];
  dias: Date[] = [];
  fechaSeleccionada:any;
  horaSeleccionada:any;

  constructor(public centros: CentroService) {
    this.peti();
    this.generarHoras();
    this.generarDias();
  }

  async peti() {
    this.centros.obtenercentros();
  }

  generarHoras() {
    for (let i = 8; i <= 22; i++) {
      this.horas.push(i);
    }
  }

  generarDias() {
    const hoy = new Date();
    for (let i = 0; i < 8; i++) {
      const nuevoDia = new Date();
      nuevoDia.setDate(hoy.getDate() + i);
      this.dias.push(nuevoDia);
    }
  }
}