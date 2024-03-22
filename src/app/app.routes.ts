import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { LoginComponent } from './login/login.component';
import { ResultadosComponent } from './resultados/resultados.component';
export const routes: Routes = [ 
    {path: "",redirectTo:"Seleccion", pathMatch:"full"},
    {path:"Seleccion",component:SelectorComponent},
    {path:"login",component:LoginComponent},
    {path:"resultados",component:ResultadosComponent}
];

