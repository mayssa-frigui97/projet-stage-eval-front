import { ConsulterEvaluationComponent } from './Components/rh/consulter-evaluation/consulter-evaluation.component';
import { PlanifEvaluationComponent } from './Components/rh/planif-evaluation/planif-evaluation.component';
import { UpdateUserPoleComponent } from './Components/rp/update-user-pole/update-user-pole.component';
import { AddUserPoleComponent } from './Components/rp/add-user-pole/add-user-pole.component';
import { ListUsersPoleComponent } from './Components/rp/list-users-pole/list-users-pole.component';
import { ListuserComponent } from './Components/listuser/listuser.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './components/components Commun/profil/profil.component';
import { ProxymComponent } from './components/components Commun/proxym/proxym.component';
import { LoginComponent } from './components/components Commun/login/login.component';
import { ListpolesComponent } from './components/super/listpoles/listpoles.component';
import { ListcriteresComponent } from './components/super/listcriteres/listcriteres.component';
import { AddcritereComponent } from './components/super/addcritere/addcritere.component';
import { AddpoleComponent } from './components/super/addpole/addpole.component';
import { UpdatepoleComponent } from './components/super/updatepole/updatepole.component';
import { UpdatecritereComponent } from './components/super/updatecritere/updatecritere.component';
import { UpdateEvaluationComponent } from './components/rh/update-evaluation/update-evaluation.component';
import { ListEvalPoleComponent } from './components/rp/list-eval-pole/list-eval-pole.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },/*par defaut*/
  { path: 'proxym', component: ProxymComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'list-users/update/:id', component: UpdateuserComponent },
  { path: 'list-users', component: ListuserComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'signout', component: LoginComponent},
  { path: 'list-users/add-user', component: AddUserComponent},
  { path: 'list-poles', component: ListpolesComponent},
  { path: 'list-poles/update/:id', component: UpdatepoleComponent },
  { path: 'list-poles/add-pole', component: AddpoleComponent},
  { path: 'list-criteres', component: ListcriteresComponent},
  { path: 'list-criteres/update/:id', component: UpdatecritereComponent },
  { path: 'list-criteres/add-critere', component: AddcritereComponent},
  { path: 'list-users-pole', component: ListUsersPoleComponent},
  { path: 'list-users-pole/update/:id', component: UpdateUserPoleComponent},
  { path: 'list-users-pole/add-user', component: AddUserPoleComponent},
  { path: 'planif-eval', component: PlanifEvaluationComponent},
  { path: 'list-evals', component: ConsulterEvaluationComponent},
  { path: 'list-evals/update/:id', component: UpdateEvaluationComponent},
  { path: 'list-eval-pole', component: ListEvalPoleComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
