import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import {Input } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule,], // Asegúrate de importar HttpClientModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService] // Proporciona el servicio localmente
  
})




export class LoginComponent {
  name:string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  
  emailr:string='';
  passwordr:string='';


  constructor(public authService:AuthService,private router:Router) {}

  onSubmit(): void {
    console.log("entra")
    this.authService.register(this.name,this.email, this.password)
   
    this.router.navigate(['/'])
      
  }

  login(): void {
    console.log("logeado")
    this.authService.login(this.emailr, this.passwordr)
     
    // console.log(localStorage.getItem("accessToken"))
    // this.authService.userProfile(this.email, this.password)
    
      
  }

  user():void{
    this.authService.user()
    this.router.navigate(['/'])
  
  }

}