import { UserserviceService } from './../../services/userservice.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: User;

  constructor(
    private userserviceService: UserserviceService,
    private router: Router) { 
  }

  ngOnInit(): void {
  }

  getUser(id : number){
    this.userserviceService.getUser(id).subscribe(
      (user) => {
        this.user=user;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

}
