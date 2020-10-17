import { ConsulterEvaluationComponent } from './Components/rh/consulter-evaluation/consulter-evaluation.component';
import { ListUsersPoleComponent } from './Components/rp/list-users-pole/list-users-pole.component';
import { ListuserComponent } from './Components/listuser/listuser.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { AuthInterceptor } from './auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { HeaderNavComponent } from './components/components Commun/header-nav/header-nav.component';
import { HeaderSidebarComponent } from './components/components Commun/header-sidebar/header-sidebar.component';
import { FooterComponent } from './components/components Commun/footer/footer.component';
import { ProxymComponent } from './components/components Commun/proxym/proxym.component';
import { ProfilComponent } from './components/components Commun/profil/profil.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/components Commun/login/login.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ListpolesComponent } from './components/super/listpoles/listpoles.component';
import { ListcriteresComponent } from './components/super/listcriteres/listcriteres.component';
import { AddcritereComponent } from './components/super/addcritere/addcritere.component';
import { UpdatecritereComponent } from './components/super/updatecritere/updatecritere.component';
import { UpdatepoleComponent } from './components/super/updatepole/updatepole.component';
import { AddpoleComponent } from './components/super/addpole/addpole.component';
import { AddUserPoleComponent } from './Components/rp/add-user-pole/add-user-pole.component';
import { UpdateUserPoleComponent } from './Components/rp/update-user-pole/update-user-pole.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateEvaluationComponent } from './components/rh/update-evaluation/update-evaluation.component';
import { PlanifEvaluationComponent } from './Components/rh/planif-evaluation/planif-evaluation.component';
import { ListEvalPoleComponent } from './components/rp/list-eval-pole/list-eval-pole.component';
import { ConsulterEvalComponent } from './components/colaborateur/consulter-eval/consulter-eval.component';
import { RemplirEvalComponent } from './components/colaborateur/remplir-eval/remplir-eval.component';
import { SignoutComponent } from './Components/components Commun/signout/signout.component';
import { ConsulterEvalDetailComponent } from './components/consulter-eval-detail/consulter-eval-detail.component';
import { AjouterFeedbackComponent } from './components/ajouter-feedback/ajouter-feedback.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HeaderSidebarComponent,
    FooterComponent,
    ProxymComponent,
    ProfilComponent,
    UserComponent,
    UpdateuserComponent,
    ListuserComponent,
    LoginComponent,
    AddUserComponent,
    ListpolesComponent,
    ListcriteresComponent,
    AddcritereComponent,
    UpdatecritereComponent,
    UpdatepoleComponent,
    AddpoleComponent,
    ListUsersPoleComponent,
    AddUserPoleComponent,
    UpdateUserPoleComponent,
    PlanifEvaluationComponent,
    ConsulterEvaluationComponent,
    UpdateEvaluationComponent,
    ListEvalPoleComponent,
    ConsulterEvalComponent,
    RemplirEvalComponent,
    SignoutComponent,
    ConsulterEvalDetailComponent,
    AjouterFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
