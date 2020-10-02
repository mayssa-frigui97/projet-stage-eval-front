import { PoleService } from './../../../services/pole.service';
import { Pole } from './../../../model/pole';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-updatepole',
  templateUrl: './updatepole.component.html',
  styleUrls: ['./updatepole.component.css']
})
export class UpdatepoleComponent implements OnInit {

  pole: Pole; 

  constructor(
    private poleService: PoleService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private location: Location) { 
  }

  ngOnInit(): void {
  this.getpole();
  console.log("pole here nginit: ",this.pole);
  }
  
  getpole(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.poleService.getPole(id)
      .subscribe(pole => {
        this.pole = pole
      });
  }

  retour(){
    this.location.back();
  }

  enregistrer(pole: Pole)
  {
    console.log("pole here enregistrer: ",pole);
    this.poleService.updatePole(pole).subscribe(
      () => this.retour()
       );
  }
}
