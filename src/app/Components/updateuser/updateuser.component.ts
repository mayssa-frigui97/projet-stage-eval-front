import { Pole } from './../../model/pole';
import { PoleService } from './../../services/pole.service';
import { User } from './../../model/user';
import { UserserviceService } from './../../services/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  poles: Pole[];
  pole : Pole;
  errorMessage='';

  constructor(
    private userserviceService: UserserviceService,
    private poleService : PoleService, 
    private activatedRoute : ActivatedRoute,
    private location: Location) { 
  }

  ngOnInit(): void {
  this.getUser();
  console.log("user here nginit: ",this.user);
  this.getPoles();
  }
  
  getUser(): void {
    const datePipe = new DatePipe(navigator.language)
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userserviceService.getUser(id)
      .subscribe(user => {
        user.date_emb = datePipe.transform(user.date_emb, 'yyyy-MM-dd');
        user.date_naiss = datePipe.transform(user.date_naiss, 'yyyy-MM-dd');
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
  getPoles(){
    this.poleService.getPoles().subscribe(
      (poles) => {
        this.poles=poles;
      },
      (error) => {
        this.errorMessage = `Problème de connexion à votre serveur. Prière de consulter l'administrateur.`;
        console.log(error);
      }
    );
  }
}
