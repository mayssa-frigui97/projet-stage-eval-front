import { Pole } from './../../../model/pole';
import { User } from './../../../model/user';
import { UserserviceService } from './../../../services/userservice.service';
import { TokenStorageService } from './../../../services/token-storage.service';
import { PoleService } from './../../../services/pole.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users-pole',
  templateUrl: './list-users-pole.component.html',
  styleUrls: ['./list-users-pole.component.css']
})
export class ListUsersPoleComponent implements OnInit {

  pole : Pole;
  users : User[];
  user : User;

  constructor(
    private tokenService : TokenStorageService,
    private userService : UserserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pole = this.tokenService.getUser().pole;
    console.log("id pole:",this.pole.id);

    this.userService.getUsersOfPole(this.pole.id).subscribe(
      (users) => {
        this.users=users;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
    console.log("users de pole:",this.pole.id,": ",this.users);
  }

  deleteuser(user: User){
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe(
      (response) => {
        this.router.navigate(['list-users-pole']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
      )
  }


}
