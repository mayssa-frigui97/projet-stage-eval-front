import { CritereService } from './../../../services/critere.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Critere } from 'src/app/model/critere';

@Component({
  selector: 'app-updatecritere',
  templateUrl: './updatecritere.component.html',
  styleUrls: ['./updatecritere.component.css']
})
export class UpdatecritereComponent implements OnInit {

  critere: Critere; 

  constructor(
    private critereService: CritereService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private location: Location) { 
  }

  ngOnInit(): void {
  this.getCritere();
  console.log("Critere here nginit: ",this.critere);
  }
  
  getCritere(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.critereService.getCritere(id)
      .subscribe(critere => {
        this.critere = critere
      });
  }

  retour(){
    this.location.back();
  }

  enregistrer(Critere: Critere)
  {
    console.log("Critere here enregistrer: ",Critere);
    this.critereService.updateCritere(Critere).subscribe(
      () => this.retour()
       );
  }

}
