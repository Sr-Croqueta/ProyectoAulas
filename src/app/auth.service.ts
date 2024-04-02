import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000'; // URL de tu backend Laravel
  mensaje:any[]=[];
  tokens:any;
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { 
  
  }
  get refresh$(){
    return this._refresh$;
  }

 

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
    this.http.post(`${this.apiUrl}/api/login`, { email, password }).subscribe((response: any) => {
      // Extraer el token del cuerpo de la respuesta
      const token = response.token;
  
      // Verificar si se recibió un token válido
      if (token) {
        // Almacenar el token en el almacenamiento local
        localStorage.setItem('accessToken', token);
      }

      tap(()=>{
        this._refresh$.next();
      })
  
      // Manejar la respuesta aquí
      console.log(response);
    });
  }
  

 
  user() {
    // Obtener el token de acceso del almacenamiento local
    const accessToken = localStorage.getItem('accessToken');
  
    // Verificar si se ha almacenado un token de acceso
    if (accessToken) {
      // Definir las cabeceras de la solicitud con el token de acceso
      const headers = {
        'Authorization': `Bearer ${accessToken}`
      };
  
      // Realizar la solicitud de perfil de usuario con las cabeceras configuradas
      this.http.get(`${this.apiUrl}/api/user-profile`, { headers }).subscribe(
        (response: any) => {
          // Manejar la respuesta aquí
          console.log(response.UserData.email);
          this.mensaje = response.UserData.email;
          // Si necesitas hacer algo más con los datos, hazlo aquí dentro de la suscripción
        },
        (error: any) => {
          // Manejar errores aquí
          console.error(error);
        }
      );
    } else {
      console.error('No hay token de acceso almacenado');
    }
  }
  
  

  logout(): void {
    // Limpiar el token de acceso del almacenamiento local
    localStorage.removeItem('accessToken');
  
    // Realizar la solicitud de logout al servidor
    this.http.get(`${this.apiUrl}/api/logout`).subscribe(
      (response: any) => {
        // Manejar la respuesta aquí
        console.log(response);
      },
      (error: any) => {
        // Manejar errores aquí
        console.error(error);
      }
    );
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