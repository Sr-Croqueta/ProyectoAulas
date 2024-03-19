import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
export const routes: Routes = [ {path: "",redirectTo:"Seleccion", pathMatch:"full"},{path:"Seleccion",component:SelectorComponent}];
