import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pole } from '../model/pole';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../model/user';

const url = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: 'root'
})
export class PoleService {

  poles: Pole[];

  constructor(private http: HttpClient) {
  }

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}` })//Content-Type: Shows the type of document that is returned
 };

  getPoles(): Observable<Pole[]>{
    const url =`${environment.apiUrl}/poles`;
    return this.http.get<Pole[]> (url, this.httpOptions);
  }

  getUsersOfPole(id: number) :Observable<User[]>{
    const url =`${environment.apiUrl}/poles/users/${id}`;
    return this.http.get<User[]>(url, this.httpOptions);
  }

  getPole(id : number):Observable<Pole>{
    const url =`${environment.apiUrl}/poles/${id}`;
    return this.http.get<Pole>(url,this.httpOptions);
  }

  addPole(credentials):Observable<any>{
    const url =`${environment.apiUrl}/poles`;
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

    // TODO: better job of transforming error for Pole consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  deletePole(pole: Pole | number): Observable<Pole> {
    const id = typeof pole === 'number' ? pole : pole.id;
    const url = `${environment.apiUrl}/poles/${id}`;
  
    return this.http.delete<Pole>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Pole id=${id}`)),
      catchError(this.handleError<Pole>('deletePole'))
    );
  }

  updatePole(pole: Pole): Observable<any>{
    const url = `${environment.apiUrl}/Poles/${pole.id}`;
    return this.http.put(url,pole, this.httpOptions).pipe(
      tap(_ => console.log(`updated Pole id=${pole.id}`)),
      catchError(this.handleError<any>('updatePole'))
    );
  }
}
