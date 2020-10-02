import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Critere } from '../model/critere';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  criteres: Critere[];

  constructor(private http: HttpClient) {
  }

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}` })//Content-Type: Shows the type of document that is returned
 };

  getCriteres(): Observable<Critere[]>{
    const url =`${environment.apiUrl}/evaluation/critere`;
    return this.http.get<Critere[]> (url, this.httpOptions);
  }

  getCritere(id : number):Observable<Critere>{
    const url =`${environment.apiUrl}/evaluation/critere/${id}`;
    return this.http.get<Critere>(url,this.httpOptions);
  }

  addCritere(credentials):Observable<any>{
    const url =`${environment.apiUrl}/evaluation/critere`;
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

    // TODO: better job of transforming error for Critere consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  deleteCritere(critere: Critere | number): Observable<Critere> {
    const id = typeof critere === 'number' ? critere : critere.id;
    const url = `${environment.apiUrl}/evaluation/critere/${id}`;
  
    return this.http.delete<Critere>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Critere id=${id}`)),
      catchError(this.handleError<Critere>('deleteCritere'))
    );
  }

  updateCritere(critere: Critere): Observable<any>{
    const url = `${environment.apiUrl}/evaluation/critere/${critere.id}`;
    return this.http.put(url,critere, this.httpOptions).pipe(
      tap(_ => console.log(`updated Critere id=${critere.id}`)),
      catchError(this.handleError<any>('updateCritere'))
    );
  }
}

