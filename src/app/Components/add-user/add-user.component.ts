import { Pole } from './../../model/pole';
import { PoleService } from './../../services/pole.service';
import { UserserviceService } from './../../services/userservice.service';
import { UserRoleEnum } from './../../enums/userrole';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users: User[];
  poles: Pole[];
  pole : Pole;
  errorMessage='';
  userRole = UserRoleEnum;

  constructor(
    private UserService : UserserviceService,
    private poleService : PoleService, 
    private router : Router,
    private location : Location)
    { }

  ngOnInit(): void {
    this.getPoles();
    console.log("this.getPoles():",this.getPoles());
  }

  getPoles(){
    this.poleService.getPoles().subscribe(
      (poles) => {
        this.poles=poles;
        console.log("this.poles:",this.poles)
      },
      (error) => {
        this.errorMessage = `Problème de connexion à votre serveur. Prière de consulter l'administrateur.`;
        console.log(error);
      }
    );
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
      pole: formulaire.value.pole
    }
    this.UserService.addUser(credentials).subscribe(
      () => {
        console.log(credentials);
        this.router.navigate(['list-users']);
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
