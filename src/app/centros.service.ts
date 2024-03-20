import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentroService {
  datosapi:any[]=[];
  
  constructor(private http: HttpClient, ) { }

  obtenertodos(){
    this.http.get("http://127.0.0.1:8000/centros").subscribe ((datos:any)=>{
      console.log(datos)
      this.datosapi = datos;
    })
  }

  
}
