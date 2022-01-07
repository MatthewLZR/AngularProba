import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearJocComponent } from './components/dashboard/crear-joc/crear-joc.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IniciComponent } from './components/dashboard/inici/inici.component';
import { JocComponent } from './components/dashboard/joc/joc.component';
import { LlistaComponent } from './components/dashboard/llista/llista.component';
import { PageNotFoundComponent } from './components/dashboard/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'inici',pathMatch:'full'},
  {path:'inici',component:IniciComponent},



  {path:'dashboard',component:DashboardComponent, children:[
    {path:'',component:LlistaComponent},
    {path:'joc/:id',component:JocComponent},
    {path:'afegir',component:CrearJocComponent}
  ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
