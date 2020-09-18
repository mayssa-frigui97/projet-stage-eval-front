import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  errorMessage='';

  constructor(
    private personneService: UserserviceService,
    private router: Router)
    { }

  ngOnInit(): void {
  }

  addUser(formulaire: NgForm){
    this.personneService.addUser(formulaire.value).subscribe(
      (response) => {
        console.log("hello");
        this.router.navigate(['list']);
      },
      (error) => {
        this.errorMessage = `Problème de connexion à votre serveur. Prière de consulter l'administrateur.`;
        console.log(error);
      }
    )
  }
}
