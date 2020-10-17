import { User } from './../../../model/user';
import { FeedbackService } from './../../../services/feedback.service';
import { EvalTypeEnum } from './../../../enums/EvalType';
import { TokenStorageService } from './../../../services/token-storage.service';
import { EvaluationService } from './../../../services/evaluation.service';
import { Evaluation } from './../../../model/evaluation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/model/feedback';

@Component({
  selector: 'app-consulter-eval',
  templateUrl: './consulter-eval.component.html',
  styleUrls: ['./consulter-eval.component.css']
})
export class ConsulterEvalComponent implements OnInit {

  evaluation: Evaluation;
  feedbacks : Feedback[];
  feedback : Feedback;
  typeEval = EvalTypeEnum;
  colaborateur :User;
  idEval : number;

  constructor(
    private evaluationService: EvaluationService,
    private tokenService: TokenStorageService,
    private feedbackService : FeedbackService
    ) { }

  ngOnInit(): void {
    this.colaborateur=this.tokenService.getUser();
    this.evaluationService.getEvaluationByCol(this.tokenService.getUser().id).subscribe(
      (evaluation) => {
        this.evaluation=evaluation;
        this.idEval=evaluation.id;
        this.getFeedbacks(this.idEval);
        console.log("evaluation :",this.evaluation,"id:",this.idEval)
      },
      () => {
        console.log("pas d'evaluations");
      }
    );
  }

  getFeedbacks(idEval){
    this.feedbackService.getFeedbacksByEval(idEval).subscribe(
      (feedbacks) => {
        this.feedbacks = feedbacks;
        console.log("feedbacks:",this.feedbacks)
      },
      () => {
        console.log("pas de feedbacks");
      }
    );
  }

}
