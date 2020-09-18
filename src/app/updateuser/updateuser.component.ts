import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  User: user;

  constructor() { 
    this.User=new user(1,"mayssa","frigui",23,123456,"Ingénieur Informatique","tof.jpg",1200);
  }

  ngOnInit(): void {
  }

}
