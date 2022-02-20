import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContantComponent } from './components/contant/contant.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkilsComponent } from './components/skils/skils.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'projects' , component:ProjectsComponent},
  {path:'skills' , component:SkilsComponent},
  {path:'contant' , component:ContantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
