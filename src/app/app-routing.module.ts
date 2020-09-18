import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ProfilComponent } from './profil/profil.component';
import { ProxymComponent } from './proxym/proxym.component';

const routes: Routes = [
  { path: 'proxym', component: ProxymComponent },
  { path: 'map', component: MapComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'profil/update', component: UpdateuserComponent },
  { path: 'list', component: ListuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
