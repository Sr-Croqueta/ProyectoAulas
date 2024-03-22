import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000'; // URL de tu backend Laravel

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        // Almacena el token de acceso en el almacenamiento local
        localStorage.setItem('access_token', response.access_token);
      })
    );
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
