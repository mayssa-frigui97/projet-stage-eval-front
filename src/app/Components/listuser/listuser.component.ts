import { User } from './../../model/user';
import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users: User[];

  user: User;

  constructor(private userserviceService: UserserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.userserviceService.getUsers().subscribe(
      (users) => {
        this.users=users;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

  deleteuser(user: User){
    this.users = this.users.filter(u => u !== user);
    this.userserviceService.deleteUser(user).subscribe(
      (response) => {
        this.router.navigate(['list']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
      )
  }

  // updateuser(user: User):User{
  //   this.users = this.users.filter(u => u !== user);
  //   // this.userserviceService.updateUser(user).subscribe(
  //   //   (response) => {
  //   //     console.log(response);
  //   //   },
  //   //   (error) => {
  //   //     alert(`Problème de connexion à votre serveur.`);
  //   //     console.log(error);
  //   //   }
  //   //   )
  //   return user;
  // }

}
