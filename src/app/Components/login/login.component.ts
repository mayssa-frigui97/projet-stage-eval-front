import { User } from './../../model/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userAuthenticated : User;
  public isauthenticated:boolean;
  public token;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginFormulaire:NgForm){
    console.log(loginFormulaire);
    const credentials = {
      nom_utilisateur: loginFormulaire.value.username, 
      mot_de_passe: loginFormulaire.value.password
    }
    if(this.authService.signin(credentials)){
      this.isauthenticated=true;
    }
    else{
      this.isauthenticated=false;
    }
    console.log("isauthenticated = ",this.isauthenticated);
    if (loginFormulaire.value.role=='COLABORATEUR')
    {
      console.log("*************");
    }
    if (this.authService.isCol()){
      console.log("isCol =",this.authService.isCol());
      this.router.navigate(['profil']);
    }

  }
  onSubmit(loginFormulaire:NgForm){
    const credentials = {
      nom_utilisateur: loginFormulaire.value.username, 
      mot_de_passe: loginFormulaire.value.password
    }
    this.authService
    .signin(credentials)
    .subscribe((resut: any) => localStorage.setItem('access_token', resut.access_token));
    if(this.authService.signin(credentials)){
      this.isauthenticated=true;
      // const result= this.authService.signin(credentials);
      // {this.token,this.userAuthenticated}= result;
    }
    else{
      this.isauthenticated=false;
    }
  }

}
