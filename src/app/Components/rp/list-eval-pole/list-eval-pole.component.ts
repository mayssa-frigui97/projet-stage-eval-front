import { Pole } from './../../../model/pole';
import { TokenStorageService } from './../../../services/token-storage.service';
import { Router } from '@angular/router';
import { EvaluationService } from './../../../services/evaluation.service';
import { Evaluation } from './../../../model/evaluation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-eval-pole',
  templateUrl: './list-eval-pole.component.html',
  styleUrls: ['./list-eval-pole.component.css']
})
export class ListEvalPoleComponent implements OnInit {

  evaluations: Evaluation[];
  evaluation: Evaluation;
  pole : Pole;

  constructor(
    private evaluationService: EvaluationService,
    private tokenService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.pole = this.tokenService.getUser().pole;
    this.evaluationService.getEvaluationsByPole(this.tokenService.getUser().id).subscribe(
      (evaluations) => {
        this.evaluations=evaluations;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

  deleteEvaluation(evaluation: Evaluation){
    this.evaluations = this.evaluations.filter(u => u !== evaluation);
    this.evaluationService.deleteEvaluation(evaluation).subscribe(
      () => {
        this.router.navigate(['list-Eval-pole']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
      )
  }


}
