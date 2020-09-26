import { UserRoleEnum } from './../../enums/userrole';
import { UserserviceService } from './../../services/userservice.service';
import { User } from './../../model/user';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users: User[];
  errorMessage='';
  userRole = UserRoleEnum;

  constructor(
    private UserService: UserserviceService,
    private router: Router)
    { }

  ngOnInit(): void {
    console.log(this.userRole)
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
      avatar: formulaire.value.path,
      date_emb: formulaire.value.date_emb,
      role: formulaire.value.role,
      pole: formulaire.value.pole
    }
    console.log("Role ->>>: ",credentials.role);
    this.UserService.addUser(credentials).subscribe(
      (response) => {
        console.log(credentials);
        this.router.navigate(['list']);
      },
      (error) => {
        this.errorMessage = `Problème de connexion à votre serveur. Prière de consulter l'administrateur.`;
        console.log(error);
      }
    );
  }
}
