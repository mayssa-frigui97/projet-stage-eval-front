import { AjouterFeedbackComponent } from './Components/ajouter-feedback/ajouter-feedback.component';
import { ConsulterEvalComponent } from './Components/colaborateur/consulter-eval/consulter-eval.component';
import { RemplirEvalComponent } from './Components/colaborateur/remplir-eval/remplir-eval.component';
import { UpdatecritereComponent } from './Components/super/updatecritere/updatecritere.component';
import { AddcritereComponent } from './Components/super/addcritere/addcritere.component';
import { ListcriteresComponent } from './Components/super/listcriteres/listcriteres.component';
import { LoginComponent } from './Components/components Commun/login/login.component';
import { SignoutComponent } from './Components/components Commun/signout/signout.component';
import { AddUserPoleComponent } from './Components/rp/add-user-pole/add-user-pole.component';
import { ConsulterEvaluationComponent } from './Components/rh/consulter-evaluation/consulter-evaluation.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ListuserComponent } from './Components/listuser/listuser.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { ProfilComponent } from './components/components Commun/profil/profil.component';
import { ListpolesComponent } from './components/super/listpoles/listpoles.component';
import { UpdatepoleComponent } from './components/super/updatepole/updatepole.component';
import { AddpoleComponent } from './components/super/addpole/addpole.component';
import { ListEvalPoleComponent } from './components/rp/list-eval-pole/list-eval-pole.component';
import { UpdateEvaluationComponent } from './components/rh/update-evaluation/update-evaluation.component';
import { PlanifEvaluationComponent } from './Components/rh/planif-evaluation/planif-evaluation.component';
import { UpdateUserPoleComponent } from './Components/rp/update-user-pole/update-user-pole.component';
import { ListUsersPoleComponent } from './Components/rp/list-users-pole/list-users-pole.component';
import { ProxymComponent } from './components/components Commun/proxym/proxym.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulterEvalDetailComponent } from './components/consulter-eval-detail/consulter-eval-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },/*par defaut*/
  { path: 'proxym', component: ProxymComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'list-users/update/:id', component: UpdateuserComponent },
  { path: 'list-users', component: ListuserComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'signout/signin', component: LoginComponent},
  { path: 'signout', component: SignoutComponent},
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
  { path: 'list-eval-pole', component: ListEvalPoleComponent},
  { path: 'add-eval', component: RemplirEvalComponent},
  { path: 'consulter-eval', component: ConsulterEvalComponent},
  { path: 'list-evals/detail-evaluation/:id', component: ConsulterEvalDetailComponent},
  { path: 'list-evals/add-feedback/:id', component: AjouterFeedbackComponent},
  { path: 'list-eval-pole/detail-evaluation/:id', component: ConsulterEvalDetailComponent},
  { path: 'list-eval-pole/add-feedback/:id', component: AjouterFeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
