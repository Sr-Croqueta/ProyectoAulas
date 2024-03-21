import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Asegúrate de importar HttpClientModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService] // Proporciona el servicio localmente
})


export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        // Autenticación exitosa, redirigir al dashboard u otra página
        console.log('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a otra página después del inicio de sesión
      },
      error => {
        // Manejar errores de autenticación
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Error al iniciar sesión. Verifique sus credenciales e inténtelo de nuevo.';
      }
    );
  }
}