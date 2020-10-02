import { UserserviceService } from './../../../services/userservice.service';
import { User } from './../../../model/user';
import { EvalTypeEnum } from './../../../enums/EvalType';
import { Evaluation } from './../../../model/evaluation';
import { EvaluationService } from './../../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DatePipe, Location} from '@angular/common';

@Component({
  selector: 'app-update-evaluation',
  templateUrl: './update-evaluation.component.html',
  styleUrls: ['./update-evaluation.component.css']
})
export class UpdateEvaluationComponent implements OnInit {

  evaluation: Evaluation; 
  errorMessage='';
  typeEval = EvalTypeEnum;
  rp :User;
  rps: User[];
  rh :User;
  rhs: User[];
  col :User;
  cols: User[];

  constructor(
    private EvaluationService: EvaluationService,
    private activatedRoute : ActivatedRoute,
    private userService: UserserviceService,
    private location: Location) { 
  }

  ngOnInit(): void {
    this.getEvaluation();
    this.getRp();
    this.getRH();
    this.getColPole();
  }
  
  getEvaluation(): void {
    const datePipe = new DatePipe(navigator.language)
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.EvaluationService.getEvaluation(id)
      .subscribe(evaluation => {
        evaluation.date = datePipe.transform(evaluation.date, 'yyyy-MM-dd');
        this.evaluation = evaluation
      });
  }

  retour(){
    this.location.back();
  }

  enregistrer(Evaluation: Evaluation)
  {
    console.log("Evaluation here enregistrer: ",Evaluation);
    this.EvaluationService.updateEvaluation(Evaluation).subscribe(
      () => this.retour()
       );
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

}
