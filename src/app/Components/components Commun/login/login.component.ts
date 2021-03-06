import { TokenStorageService } from './../../../services/token-storage.service';
import { User } from './../../../model/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public userAuthenticated : User;
  // public isauthenticated:boolean;
  // public token;
  // public message ='';

  // constructor(private authService: AuthService, private router: Router) { }

  // ngOnInit(): void {
  // }

  // login(loginFormulaire:NgForm){
  //   console.log(loginFormulaire);
  // }
  // onSubmit(loginFormulaire:NgForm){
  //   const credentials = {
  //     nom_utilisateur: loginFormulaire.value.username, 
  //     mot_de_passe: loginFormulaire.value.password
  //   }
  //   this.authService
  //   .signin(credentials)
  //   .subscribe(
  //     (result: any) => {
  //       this.userAuthenticated=result.user;
  //       console.log("utilisateur:",this.authService.userAuthentifiedvalue);
  //       localStorage.setItem('access_token', result.access_token);
  //       this.isauthenticated=true;
  //       this.router.navigate(['profil',this.userAuthenticated.id]);
  //     },
  //     (erreur) => {
  //       this.message="Votre nom utilisateur ou mot de passe est erroné ";
  //       this.isauthenticated=false;
  //     }
  //     );
  //   }
  // }

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;
  userAuth: User;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().role;
      this.userAuth=this.tokenStorage.getUser()
      console.log("roles:",this.tokenStorage.getUser());
    }
  }

  onSubmit() {
    this.authService.signin(this.form).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data.user);
        console.log("token:",data.access_token," user:",data.user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().role;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}