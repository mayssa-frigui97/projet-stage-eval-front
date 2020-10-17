import { EvalTypeEnum } from './../../enums/EvalType';
import { FeedbackService } from './../../services/feedback.service';
import { Feedback } from './../../model/feedback';
import { User } from './../../model/user';
import { Evaluation } from './../../model/evaluation';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-consulter-eval-detail',
  templateUrl: './consulter-eval-detail.component.html',
  styleUrls: ['./consulter-eval-detail.component.css']
})
export class ConsulterEvalDetailComponent implements OnInit {

  evaluation : Evaluation;
  colaborateur : User;
  feedbacks : Feedback[];
  feedback : Feedback;
  typeEval = EvalTypeEnum;

  constructor(
    private feedbackService: FeedbackService,
    private evaluationService : EvaluationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getEvaluation(id);
    this.getFeedbacks(id);
  }

  getEvaluation(id){
      this.evaluationService.getEvaluation(id)
        .subscribe(evaluation => {
          this.evaluation = evaluation
          this.colaborateur= evaluation.colaborateur;
          console.log("colaborateur",this.evaluation);
        });
  }

  getFeedbacks(EvalId){
    this.feedbackService.getFeedbacksByEval(EvalId)
        .subscribe(feedbacks => {
          this.feedbacks = feedbacks ;
        });
  }

  retour(){
    this.location.back();
  }

}
