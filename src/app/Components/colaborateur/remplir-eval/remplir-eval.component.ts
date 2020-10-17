import { FeedbackService } from './../../../services/feedback.service';
import { EvalTypeEnum } from './../../../enums/EvalType';
import { NgForm } from '@angular/forms';
import { User } from './../../../model/user';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../../services/token-storage.service';
import { EvaluationService } from './../../../services/evaluation.service';
import { Evaluation } from './../../../model/evaluation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remplir-eval',
  templateUrl: './remplir-eval.component.html',
  styleUrls: ['./remplir-eval.component.css']
})
export class RemplirEvalComponent implements OnInit {

  evaluation: Evaluation;
  colaborateur : User;
  today: number = Date.now();
  
  constructor(
    private evaluationService: EvaluationService,
    private tokenService: TokenStorageService,
    private feedbackService : FeedbackService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.today)
    this.colaborateur=this.tokenService.getUser();
    this.evaluationService.getEvaluationByCol(this.colaborateur.id).subscribe(
      (evaluation) => {
        this.evaluation=evaluation;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  enregistrer(formulaire: NgForm){
    const credentials = {
      date: this.evaluation.date, 
      note: formulaire.value.note,
      type: EvalTypeEnum.COLABORATEUR,
      evaluation: this.evaluation.id
    }
    
    this.feedbackService.addFeedback(credentials).subscribe(
      () => {
        console.log(credentials);
        this.router.navigate(['consulter-eval']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
