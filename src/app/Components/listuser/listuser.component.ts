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
        alert(`Problème de connexion à votre serveur. Prière de consulter l'administrateur. Les données affichées sont fakes.`);
        console.log(error);
      }
    );
  }

  // deleteUser(User: user){
  //   this.users = this.users.filter(u => u !== User);
  //   this.userserviceService.deleteUser(User).subscribe(
  //     (response) => {
  //       this.router.navigate(['list']);
  //     },
  //     (error) => {
  //       alert(`Problème de connexion à votre serveur. Prière de consulter l'administrateur. Les données affichées sont fakes.`);
  //       console.log(error);
  //     }
  //     )
  // }

}
