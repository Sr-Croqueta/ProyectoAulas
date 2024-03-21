import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [ {path: "",redirectTo:"Seleccion", pathMatch:"full"},{path:"Seleccion",component:SelectorComponent},{path:"login",component:LoginComponent}];

