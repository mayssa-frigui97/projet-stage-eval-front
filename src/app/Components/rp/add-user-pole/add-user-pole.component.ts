import { TokenStorageService } from './../../../services/token-storage.service';
import { Pole } from './../../../model/pole';
import { UserserviceService } from './../../../services/userservice.service';
import { UserRoleEnum } from './../../../enums/userrole';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-user-pole',
  templateUrl: './add-user-pole.component.html',
  styleUrls: ['./add-user-pole.component.css']
})
export class AddUserPoleComponent implements OnInit {

  users: User[];
  pole: Pole;
  errorMessage='';
  userRole = UserRoleEnum;

  constructor(
    private UserService: UserserviceService,
    private tokenService : TokenStorageService,
    private router: Router,
    private location: Location)
    { }

  ngOnInit(): void {
    this.pole = this.tokenService.getUser().pole;
  }

  getUsers(): void {
    this.UserService.getUsers()
    .subscribe(users => this.users = users);
  }

  addUser(formulaire: NgForm):void{
    const credentials = {
      nom_utilisateur: formulaire.value.username, 
      mot_de_passe: formulaire.value.password,
      nom: formulaire.value.nom,
      prenom: formulaire.value.prenom,
      cin: formulaire.value.cin,
      age: formulaire.value.age,
      poste: formulaire.value.poste,
      salaire: formulaire.value.salaire,
      avatar: formulaire.value.avatar,
      date_emb: formulaire.value.date_emb,
      role: formulaire.value.role,
      pole: this.pole.id
    }
    this.UserService.addUser(credentials).subscribe(
      () => {
        console.log(credentials);
        this.router.navigate(['list-users-pole']);
      },
      (error) => {
        this.errorMessage = `Problème de connexion à votre serveur. Prière de consulter l'administrateur.`;
        console.log(error);
      }
    );
  }

  retour(){
    this.location.back();
  }
}
