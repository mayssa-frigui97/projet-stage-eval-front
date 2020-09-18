import { UserserviceService } from './../userservice.service';
import { user } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: user[];

  constructor(private userserviceService: UserserviceService) { }

  ngOnInit(): void {
    this.users=this.userserviceService.getFakeusers();
  }

}
