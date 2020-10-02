import { PoleService } from './../../../services/pole.service';
import { Pole } from './../../../model/pole';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpoles',
  templateUrl: './listpoles.component.html',
  styleUrls: ['./listpoles.component.css']
})
export class ListpolesComponent implements OnInit {

  poles: Pole[];

  pole: Pole;

  constructor(
    private poleService: PoleService,
    private router: Router) { }

  ngOnInit(): void {
    this.poleService.getPoles().subscribe(
      (poles) => {
        this.poles=poles;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

  deletepole(pole: Pole){
    this.poles = this.poles.filter(u => u !== pole);
    this.poleService.deletePole(pole).subscribe(
      () => {
        this.router.navigate(['list-poles']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
      )
  }

}
