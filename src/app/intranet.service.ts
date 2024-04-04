import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IntranetService {
  anuncios:any[]=[];
  constructor(private http: HttpClient, ) {
    
  }

  obteneranuncios() {
    return this.http.get<any[]>("http://127.0.0.1:8000/anuncios");
  }
  obtenerenlaces() {
    return this.http.get<any[]>("http://127.0.0.1:8000/enlaces");
  }
}
