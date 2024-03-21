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
  formData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    const { email, password } = this.formData;
    this.authService.login(email, password).subscribe(
      (response) => {
   
        console.log('Inicio de sesión exitoso:', response);
        this.router.navigate(['/']); 
      },
      (error) => {
       
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
