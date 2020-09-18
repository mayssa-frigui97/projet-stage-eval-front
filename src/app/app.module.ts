import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProxymComponent } from './proxym/proxym.component';
import { MapComponent } from './map/map.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user/user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HeaderSidebarComponent,
    FooterComponent,
    ProxymComponent,
    MapComponent,
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
