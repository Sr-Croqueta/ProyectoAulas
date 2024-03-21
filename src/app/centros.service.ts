import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentroService {
  datosapi:any[]=[];
  headers:HttpHeaders;
  constructor(private http: HttpClient, ) {
    this.headers=new HttpHeaders()
   }

  obtenertodos(){
    this.http.get("http://127.0.0.1:8000/centro").subscribe ((datos:any)=>{
      
      this.datosapi = datos;
    })
  }

  
}
