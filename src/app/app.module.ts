import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
