import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rp',
  templateUrl: './rp.component.html',
  styleUrls: ['./rp.component.css']
})
export class RpComponent implements OnInit {

  content = '';

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.userService.getRpBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}