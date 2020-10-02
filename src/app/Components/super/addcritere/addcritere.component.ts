import { CritereService } from './../../../services/critere.service';
import { Component, OnInit } from '@angular/core';
import { Critere } from 'src/app/model/critere';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcritere',
  templateUrl: './addcritere.component.html',
  styleUrls: ['./addcritere.component.css']
})
export class AddcritereComponent implements OnInit {

  criteres:Critere[];
  errorMessage='';

  constructor(
    private critereService: CritereService,
    private router: Router,
    private location: Location)
    { }

  ngOnInit(): void {
  }

  getCriteres(): void {
    this.critereService.getCriteres()
    .subscribe(criteres => this.criteres =criteres);
  }

  addCritere(formulaire: NgForm):void{
    const credentials = {
      nom: formulaire.value.nom,
      coef: formulaire.value.coef
    }
    this.critereService.addCritere(credentials).subscribe(
      () => {
        console.log(credentials);
        this.router.navigate(['list-criteres']);
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
