import { Router } from '@angular/router';
import { UserRoleEnum } from './../enums/userrole';
import { User } from './../model/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isauthenticated:boolean;
  public userAuthenticatedSubject: BehaviorSubject<User>;
  public userAuthenticate : Observable<User>;
  public userAuthenticated : User;
  public token : string;

  constructor(private http: HttpClient,
    private router: Router) {
    this.userAuthenticatedSubject= new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.userAuthenticate=this.userAuthenticatedSubject.asObservable();
   }


  public get userAuthentifiedvalue(): User{
    return this.userAuthenticatedSubject.value;
  }

  signin(credentials) {
    const url = `${environment.apiUrl}/auth/signin`;
    return this.http.post(url, credentials);
  }

  // public saveAuthenticatedUser():User{
  //   let t=localStorage.getItem('access_token');
  //   console.log("t:",t);
  //   if(t){
  //     let user=JSON.parse(atob(t));
  //     console.log(user);
  //     this.userAuthenticated=user;
  //     console.log(this.userAuthenticated);
  //     this.isauthenticated=true;
  //     this.token=t;
  //   }
  //   return this.userAuthenticated;
  // }

  getUser() : Observable<User>{
    return this.userAuthenticate;
  }

  // setUser(user: User){
  //   this.userAuthenticated=user;
  // }


  public isSuper(){
    if(this.userAuthenticated){
      if(this.userAuthenticated.role=='SUPER')
      
      return true;
    }return false;


  }
  public isCol(){
    if(this.userAuthenticated){
      if(this.userAuthenticated.role=='COLABORATEUR')
      
      return true;
    }return false;


  }
  public isRH(){
    if(this.userAuthenticated){
      if(this.userAuthenticated.role=='RH')
      
      return true;
    }return false;


  }

  public isRP(){
    if(this.userAuthenticated){
      if(this.userAuthenticated.role==='RP')
      return true;
    }return false;


  }

  logout() {
    console.log('Tentative de déconnexion');

    localStorage.removeItem('user');
    this.userAuthenticatedSubject.next(null);
    this.router.navigate(['/login']);
  }
}
