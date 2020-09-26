import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborateur',
  templateUrl: './colaborateur.component.html',
  styleUrls: ['./colaborateur.component.css']
})
export class ColaborateurComponent implements OnInit {

  content = '';

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.userService.getColaborateurBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
