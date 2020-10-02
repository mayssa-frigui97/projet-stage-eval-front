import { EvaluationService } from './../../../services/evaluation.service';
import { Evaluation } from './../../../model/evaluation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulter-evaluation',
  templateUrl: './consulter-evaluation.component.html',
  styleUrls: ['./consulter-evaluation.component.css']
})
export class ConsulterEvaluationComponent implements OnInit {

  evaluations: Evaluation[];

  evaluation: Evaluation;

  constructor(
    private evaluationService: EvaluationService,
    private router: Router) { }

  ngOnInit(): void {
    this.evaluationService.getEvaluations().subscribe(
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
        this.router.navigate(['list-Evals']);
      },
      (error) => {
        alert(`Problème de connexion à votre serveur.`);
        console.log(error);
      }
      )
  }


}
