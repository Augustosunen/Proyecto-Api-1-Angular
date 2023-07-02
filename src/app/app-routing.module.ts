import { RegistroRoutingModule } from './pages/Registro/registro-routing.module';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './father/father.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'Home2', loadChildren: () => import('./pages/home2/home2.module').then(m => m.Home2Module)},
  {path: 'log-in', loadChildren: () => import('./pages/log-in/log-in.module').then(m => m.LogInModule)},
  {path: 'Registro', loadChildren: () => import('./pages/Registro/registro.module').then(m => m.RegistroModule)},
  //{path: 'app-father', component: FatherComponent},
  //{path: 'app-form-registro', component: FormRegistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
