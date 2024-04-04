import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IntranetService } from '../intranet.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-enlaces',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './enlaces.component.html',
  styleUrl: './enlaces.component.css',
  providers: [IntranetService]
})
export class EnlacesComponent implements OnInit {
  enlaces: any[] = [];
  cont: number = 1;
  limit = 10;
  totalPages: number = 0;
  page: number = 1;
  shouldReloadNgFor: boolean = true;

  constructor(public intranet: IntranetService) {}

  ngOnInit(): void {
    this.intranet.obtenerenlaces().subscribe((datos: any[]) => {
      this.enlaces = datos;
      this.calcularTotalPaginas();
      console.log(this.enlaces)
    });
  }

  calcularTotalPaginas() {
    this.totalPages = Math.ceil(this.enlaces.length / this.limit);
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
