import { User } from './../../../model/user';
import { UserserviceService } from './../../../services/userservice.service';
import { Router } from '@angular/router';
import { EvaluationService } from './../../../services/evaluation.service';
import { EvalTypeEnum } from './../../../enums/EvalType';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-planif-evaluation',
  templateUrl: './planif-evaluation.component.html',
  styleUrls: ['./planif-evaluation.component.css']
})
export class PlanifEvaluationComponent implements OnInit {

  typeEval = EvalTypeEnum;
  rp :User;
  rps: User[];
  rh :User;
  rhs: User[];
  col :User;
  cols: User[];
  errorMessage='';

  constructor(
    private userService: UserserviceService,
    private evalService : EvaluationService,
    private router : Router,
    private location : Location
  ) { }

  ngOnInit(): void {
    this.getRp();
    this.getRH();
    this.getColPole();
  }

  getRp(){
    return this.userService.getRP().subscribe(
      (rps) => {
        this.rps=rps;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

  getRH(){
    return this.userService.getRH().subscribe(
      (rhs) => {
        this.rhs=rhs;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

  getColPole(){
    return this.userService.getColPole().subscribe(
      (cols) => {
        this.cols=cols;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

  addEval(formulaire: NgForm):void{
    const credentials = {
      date: formulaire.value.dateEval, 
      rh: formulaire.value.rh,
      rp: formulaire.value.rp,
      colaborateur: formulaire.value.col
    }
    this.evalService.addEvaluation(credentials).subscribe(
      () => {
        console.log(credentials);
        this.router.navigate(['list-evals']);
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
