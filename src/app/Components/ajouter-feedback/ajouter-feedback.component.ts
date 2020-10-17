import { User } from './../../model/user';
import { TokenStorageService } from './../../services/token-storage.service';
import { NgForm } from '@angular/forms';
import { FeedbackService } from './../../services/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from './../../services/evaluation.service';
import { Evaluation } from './../../model/evaluation';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ajouter-feedback',
  templateUrl: './ajouter-feedback.component.html',
  styleUrls: ['./ajouter-feedback.component.css']
})
export class AjouterFeedbackComponent implements OnInit {

  evaluation : Evaluation;
  evalue : User;
  evaluateur: User;

  constructor(
    private evaluationService: EvaluationService,
    private activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService,
    private router : Router,
    private location : Location,
    private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.evaluationService.getEvaluation(id)
        .subscribe(evaluation => {
          this.evaluation = evaluation;
          this.evalue= evaluation.colaborateur;
        });
    this.evaluateur= this.tokenStorageService.getUser();
  }

  addFeedback(formulaire: NgForm):void{
    const credentials = {
      date: this.evaluation.date, 
      note: formulaire.value.note,
      type: this.evaluateur.role,
      evaluation: this.evaluation.id
    }
    
    this.feedbackService.addFeedback(credentials).subscribe(
      () => {
        console.log(credentials);
        this.router.navigate(['list-evals']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retour(){
    this.location.back();
  }
}
