import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IntranetService } from '../intranet.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  providers: [IntranetService]
})
export class InicioComponent {
anuncios: any[] = [
  
];
  cont: number = 1;
  limit = 10;
  totalPages: number = 0;
  page: number = 1;
  shouldReloadNgFor: boolean = true;

  constructor(public intranet:IntranetService) {
    this.calcularTotalPaginas();
    this.anuncios=this.intranet.obteneranuncios();
    console.log(this.anuncios)

  }

  calcularTotalPaginas() {
    this.totalPages = Math.ceil(this.anuncios.length / this.limit);
  }

  paginacion(peti: string) {
    if (peti == ">" && this.page < this.totalPages) {
      this.cont =this.cont +10;
      console.log(this.cont)
      
      this.page++;
      
      this.shouldReloadNgFor = !this.shouldReloadNgFor; // Cambiar el estado para recargar ngFor
    }
    if (peti == "<" && this.page > 1) {
      this.cont = this.cont-10;
      if (this.cont == 0) this.cont++
      
      this.page--;
      
      this.shouldReloadNgFor = !this.shouldReloadNgFor; // Cambiar el estado para recargar ngFor
    }
    this.shouldReloadNgFor = !this.shouldReloadNgFor;
  }
  
  
}