import { environment } from './../../environments/environment';
import { Evaluation } from './../model/evaluation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  evaluations: Evaluation[];

  constructor(private http: HttpClient) {
  }

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}` })//Content-Type: Shows the type of document that is returned
 };

  getEvaluations(): Observable<Evaluation[]>{
    const url =`${environment.apiUrl}/evaluation`;
    return this.http.get<Evaluation[]> (url, this.httpOptions);
  }

  getEvaluationsByPole(id: number) :Observable<Evaluation[]>{
    const url =`${environment.apiUrl}/evaluation/pole/${id}`;
    return this.http.get<Evaluation[]>(url, this.httpOptions);
  }

  getEvaluation(id : number):Observable<Evaluation>{
    const url =`${environment.apiUrl}/evaluation/${id}`;
    return this.http.get<Evaluation>(url,this.httpOptions);
  }

  addEvaluation(credentials):Observable<any>{
    const url =`${environment.apiUrl}/evaluation`;
    console.log(credentials);
    return this.http.post(url,credentials, this.httpOptions);
  }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {//????
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for Evaluation consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  deleteEvaluation(evaluation: Evaluation | number): Observable<Evaluation> {
    const id = typeof evaluation === 'number' ? evaluation : evaluation.id;
    const url = `${environment.apiUrl}/evaluation/${id}`;
  
    return this.http.delete<Evaluation>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Evaluation id=${id}`)),
      catchError(this.handleError<Evaluation>('deleteEvaluation'))
    );
  }

  updateEvaluation(evaluation: Evaluation): Observable<any>{
    const url = `${environment.apiUrl}/evaluation/${evaluation.id}`;
    return this.http.put(url,evaluation, this.httpOptions).pipe(
      tap(_ => console.log(`updated Evaluation id=${evaluation.id}`)),
      catchError(this.handleError<any>('updateEvaluation'))
    );
  }


}
