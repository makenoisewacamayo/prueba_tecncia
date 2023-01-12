import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AboutComponent } from './about/about.component';
import { ResultadoComponent } from './resultado/resultado.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
      path: 'app',
      component: MainComponent
  },
  {
    path: 'encuesta',
    component: EncuestaComponent
  },
  {
    path: 'resultado',
    component: ResultadoComponent,
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
