import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(loginFormulaire:NgForm){
    console.log(loginFormulaire);
  }
  onSubmit(loginFormulaire:NgForm){
    const credentials = {
      nom_utilisateur: loginFormulaire.value.username, 
      mot_de_passe: loginFormulaire.value.password
    }
    this.authService
    .signin(credentials)
    .subscribe((resut: any) => localStorage.setItem('access_token', resut.access_token));

  }

}
