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
   
  obtenerAulasDisponibles(hora: number, dia: string, centro: string) {
    // Obtener el token CSRF
    this.http.get<string>('http://127.0.0.1:8000/csrf-token').subscribe(csrfToken => {
      
      const datos = { hora, dia, centro };
      

      // Agregar el token CSRF a las cabeceras
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      });
      console.log(headers)

      // Realizar la solicitud POST con el token CSRF incluido en las cabeceras
      this.http.post("http://127.0.0.1:8000/sacardisponibles", datos, { headers }).subscribe(
        
        (error) => {
          console.log(headers)
          console.error('Error al obtener aulas disponibles:', error);
        }
      );
    });
  }

  obtenercentros(){
    this.http.get("http://127.0.0.1:8000/centro").subscribe ((datos:any)=>{
      
      this.trendapi = datos;
      console.log(this.trendapi)
      return this.trendapi;
    })
  }

  
}
