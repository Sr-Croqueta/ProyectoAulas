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
 
  constructor(public centros: CentroService){
    this.peti();
  }

  peti(){
    this.centros.obtenertodos();
  }
}

