import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { LoginComponent } from './login/login.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { InicioComponent } from './inicio/inicio.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { ContactosexternosComponent } from './contactosexternos/contactosexternos.component';

export const routes: Routes = [ 
    {path: "",redirectTo:"inicio", pathMatch:"full"},
    {path:"Seleccion",component:SelectorComponent},
    {path:"login",component:LoginComponent},
    {path:"resultados",component:ResultadosComponent},
    {path:"inicio", component:InicioComponent},
    {path:"aplicaciones", component:AplicacionesComponent},
    {path:"enlaces", component:EnlacesComponent},
    {path:"contactos-externos", component:ContactosexternosComponent}

];

