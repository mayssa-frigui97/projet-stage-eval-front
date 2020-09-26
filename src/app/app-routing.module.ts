import { ColaborateurComponent } from './Components/colaborateur/colaborateur.component';
import { LoginComponent } from './components/login/login.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './components/profil/profil.component';
import { ProxymComponent } from './components/proxym/proxym.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SuperComponent } from './Components/super/super.component';
import { RhComponent } from './Components/rh/rh.component';
import { RpComponent } from './Components/rp/rp.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },/*par defaut*/
  { path: 'proxym', component: ProxymComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'list/update/:id', component: UpdateuserComponent },
  { path: 'list', component: ListuserComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'signout', component: LoginComponent},
  { path: 'super', component: SuperComponent},
  { path: 'colaborateur', component: ColaborateurComponent},
  { path: 'rh', component: RhComponent},
  { path: 'rp', component: RpComponent},
  { path: 'add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
