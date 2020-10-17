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
    private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.pole = this.tokenService.getUser().pole;
    this.evaluationService.getEvaluationsByPole(this.pole.id).subscribe(
      (evaluations) => {
        this.evaluations=evaluations;
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
    );
  }

}
