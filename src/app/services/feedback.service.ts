import { Feedback } from './../model/feedback';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}` })//Content-Type: Shows the type of document that is returned
 };

  getFeedbacks(): Observable<Feedback[]>{
    const url =`${environment.apiUrl}/evaluation/feedback`;
    return this.http.get<Feedback[]> (url, this.httpOptions);
  }

  getFeedbacksByEval(EvalId : number): Observable<Feedback[]>{
    const url =`${environment.apiUrl}/evaluation/feedback/?evaluation=${EvalId}`;
    return this.http.get<Feedback[]> (url, this.httpOptions);
  }

  getFeedback(id : number):Observable<Feedback>{
    const url =`${environment.apiUrl}/evaluation/feedback/${id}`;
    return this.http.get<Feedback>(url,this.httpOptions);
  }

  addFeedback(credentials):Observable<any>{
    const url =`${environment.apiUrl}/evaluation/feedback`;
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

    // TODO: better job of transforming error for Feedback consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  deleteFeedback(feedback: Feedback | number): Observable<Feedback> {
    const id = typeof feedback === 'number' ? feedback : feedback.id;
    const url = `${environment.apiUrl}/evaluation/feedback/${id}`;
  
    return this.http.delete<Feedback>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Feedback id=${id}`)),
      catchError(this.handleError<Feedback>('deleteFeedback'))
    );
  }

  updateFeedback(feedback: Feedback): Observable<any>{
    const url = `${environment.apiUrl}/evaluation/feedback/${feedback.id}`;
    return this.http.put(url,Feedback, this.httpOptions).pipe(
      tap(_ => console.log(`updated Feedback id=${feedback.id}`)),
      catchError(this.handleError<any>('updateFeedback'))
    );
  }
}


