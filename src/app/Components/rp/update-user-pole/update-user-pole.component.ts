import { UserserviceService } from './../../../services/userservice.service';
import { User } from './../../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-user-pole',
  templateUrl: './update-user-pole.component.html',
  styleUrls: ['./update-user-pole.component.css']
})
export class UpdateUserPoleComponent implements OnInit {

  user: User; 

  constructor(
    private userserviceService: UserserviceService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private location: Location) { 
  }

  ngOnInit(): void {
  this.getUser();
  }
  
  getUser(): void {
    const datePipe = new DatePipe(navigator.language)
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userserviceService.getUser(id)
      .subscribe(user => {
        user.date_emb = datePipe.transform(user.date_emb, 'yyyy-MM-dd');
        this.user = user
      });
  }

  retour(){
    this.location.back();
  }

  enregistrer(user: User)
  {
    this.userserviceService.updateUser(user).subscribe(
      () => this.retour()
       );
  }

}
