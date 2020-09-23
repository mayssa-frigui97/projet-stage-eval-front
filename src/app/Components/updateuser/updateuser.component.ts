import { Router } from '@angular/router';
import { UserserviceService } from './../../services/userservice.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: User;

  constructor(
    private userserviceService: UserserviceService,
    private router : Router) { 
  }

  ngOnInit(): void {
  }

  modifInfo(user: User)
  {
    this.userserviceService.updateUser(user).subscribe(
      (response) => {
        this.router.navigate(['list']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
      )
  }

}
