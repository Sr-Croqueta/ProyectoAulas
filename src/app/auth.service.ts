import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  access_token: string;
  // Otras propiedades si es necesario
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000'; // URL de tu backend Laravel
  mensaje:any[]=[];

  constructor(private http: HttpClient) { }

  register(name: string,email: string, password: string) {
    console.log(name)
    return this.http.post(`${this.apiUrl}/registro`, {name, email, password }).subscribe((aulas: any) => {
      // Manejar la respuesta aquí
      console.log(aulas)
      this.mensaje = aulas;
      // Si necesitas hacer algo más con los datos, hazlo aquí dentro de la suscripción
  });
  }
   login(email: string, password: string) {
  
    return this.http.post(`${this.apiUrl}/api/login`, { email, password }).subscribe((aulas: any) => {
      // Manejar la respuesta aquí
      console.log(aulas)
      this.mensaje = aulas;
      // Si necesitas hacer algo más con los datos, hazlo aquí dentro de la suscripción
  });
  }

  user(email: string, password: string) {
  
    return this.http.post(`${this.apiUrl}/api/login`, { email, password }).subscribe((aulas: any) => {
      // Manejar la respuesta aquí
      console.log(aulas)
      this.mensaje = aulas;
      // Si necesitas hacer algo más con los datos, hazlo aquí dentro de la suscripción
  });
  }
  

  logout(): void {
    // Elimina el token de acceso del almacenamiento local
    localStorage.removeItem('access_token');
  }

  getToken(): string | null {
    // Obtiene el token de acceso del almacenamiento local
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    // Comprueba si el usuario está autenticado comprobando si hay un token de acceso
    return !!this.getToken();
  }
}