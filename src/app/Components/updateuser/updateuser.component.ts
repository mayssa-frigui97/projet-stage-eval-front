import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from './../../services/userservice.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: User; 

  constructor(
    private userserviceService: UserserviceService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private location: Location) { 
  }

  ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(
  //     (params) => {
  //       this.userserviceService.getUser(params.id).subscribe(
  //         (user) => {this.user=user;}
  //       );
  //     }      
  //   );
  // }

  this.getUser();
  console.log("user here nginit: ",this.user);
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
    console.log("user here enregistrer: ",user);
    this.userserviceService.updateUser(user).subscribe(
      () => this.retour()
       );
  }

}
