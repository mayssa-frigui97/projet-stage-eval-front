import { UserserviceService } from './../userservice.service';
import { user } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  User: user;

  constructor() { 
    this.User=new user(1,"mayssa","frigui",23,123456,"Ingénieur Informatique","tof.jpg",1200);
  }

  ngOnInit(): void {
  }

}
