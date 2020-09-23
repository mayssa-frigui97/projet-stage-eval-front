import { UserRoleEnum } from './../enums/userrole';
import { User } from './../model/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isauthenticated:boolean;
  public userAuthenticated: User;

  constructor(private http: HttpClient) { }

  signin(credentials) {
    const url = `${environment.apiUrl}/auth/signin`;
    return this.http.post(url, credentials);
  }

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
}
