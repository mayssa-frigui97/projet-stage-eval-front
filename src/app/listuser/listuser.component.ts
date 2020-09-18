import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users: user[];

  User: user;

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
        this.users=this.userserviceService.getFakeusers();
      }
    );
  }

  deleteUser(){
    this.userserviceService.deleteUser(this.User.id).subscribe(
      (response) => {
        this.router.navigate(['list']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur. Prière de consulter l'administrateur. Les données affichées sont fakes.`);
        console.log(error);
      }
      )
  }

}
