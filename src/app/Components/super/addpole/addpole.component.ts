import { PoleService } from './../../../services/pole.service';
import { Pole } from './../../../model/pole';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-addpole',
  templateUrl: './addpole.component.html',
  styleUrls: ['./addpole.component.css']
})
export class AddpoleComponent implements OnInit {

  poles: Pole[];
  errorMessage='';

  constructor(
    private poleService: PoleService,
    private router: Router,
    private location: Location)
    { }

  ngOnInit(): void {
  }

  getPoles(): void {
    this.poleService.getPoles()
    .subscribe(poles => this.poles = poles);
  }

  addPole(formulaire: NgForm):void{
    const credentials = {
      nom: formulaire.value.nom
    }
    this.poleService.addPole(credentials).subscribe(
      (response) => {
        console.log(credentials);
        this.router.navigate(['list-poles']);
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
