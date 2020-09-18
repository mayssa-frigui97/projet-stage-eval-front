import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users: user[];

  constructor(private userserviceService: UserserviceService) {
    this.users=this.userserviceService.getFakeusers();
   }

  ngOnInit(): void {
  }

}
