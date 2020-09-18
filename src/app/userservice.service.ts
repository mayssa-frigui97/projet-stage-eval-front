import { user } from './model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_LINK='';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users: user[];

  constructor() {
    this.users=[
      new user(1,"mayssa","frigui",23,123456,"Ingénieur Informatique","tof.jpg",1200),
      new user(2,"alaa","brahim",28,14656,"ingénieur embarqué","tof2.jpg",1300),
      new user(3,"hayet","graja",51,1796856,"prof","tof3.jpg",1000)
      ];
   }

  getFakeusers(): user[]{
    return this.users;
  }
/*
  getUsers(): Observable<user[]>{
    return this.http.get<user[]> (API_LINK);
  }*/



}
