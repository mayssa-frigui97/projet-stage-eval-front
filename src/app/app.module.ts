import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderSidebarComponent } from './components/header-sidebar/header-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProxymComponent } from './components/proxym/proxym.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UserComponent } from './components/user/user.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SuperComponent } from './Components/super/super.component';
import { RhComponent } from './Components/rh/rh.component';
import { RpComponent } from './Components/rp/rp.component';
import { ColaborateurComponent } from './Components/colaborateur/colaborateur.component';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
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
    SuperComponent,
    RhComponent,
    RpComponent,
    ColaborateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
