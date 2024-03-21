import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentroService {
  datosapi:any[]=[];
  trendapi:any[]=[];
  constructor(private http: HttpClient, ) {
    
   }

  obtenertodos(){
    this.http.get("http://127.0.0.1:8000/centro").subscribe ((datos:any)=>{
      
      this.datosapi = datos;
      return this.datosapi;
    })
  }

  obtenercentros(){
    this.http.get("http://127.0.0.1:8000/centro").subscribe ((datos:any)=>{
      
      this.trendapi = datos;
      console.log(this.trendapi)
      return this.trendapi;
    })
  }

  
}
