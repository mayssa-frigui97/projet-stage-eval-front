import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: User;

  constructor() { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

}
