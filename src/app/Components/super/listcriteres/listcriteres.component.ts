import { CritereService } from './../../../services/critere.service';
import { Critere } from './../../../model/critere';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcriteres',
  templateUrl: './listcriteres.component.html',
  styleUrls: ['./listcriteres.component.css']
})
export class ListcriteresComponent implements OnInit {

  criteres: Critere[];

  critere: Critere;

  constructor(
    private critereService: CritereService,
    private router: Router) { }

  ngOnInit(): void {
    this.critereService.getCriteres().subscribe(
      (criteres) => {
        this.criteres=criteres;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

  deletecritere(critere: Critere){
    this.criteres = this.criteres.filter(u => u !== critere);
    this.critereService.deleteCritere(critere).subscribe(
      () => {
        this.router.navigate(['list-criteres']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
      )
  }


}
