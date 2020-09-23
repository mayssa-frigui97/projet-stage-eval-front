import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  Users: User[];
  

  constructor(private http: HttpClient) {
   }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}` })//Content-Type: Shows the type of document that is returned
  };

  getFakeUsers(): User[]{
    return this.Users=[
      new User()
      ];
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]> (`${environment.apiUrl}/users`, this.httpOptions);
  }

  getUser(id : number){
    return this.http.get<User>(`${environment.apiUrl}/users`,this.httpOptions);
  }

  addUser(credentials):Observable<any>{
    console.log(credentials);
    return this.http.post(`${environment.apiUrl}/users`,credentials, this.httpOptions);
  }
/*
  addUser(User: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/User`, User, this.httpOptions).pipe(
      tap((newUser: User) => console.log(`added User w/ id=${newUser.id}`))
    );
  }*/
/*
  deleteUser(id: number):Observable<any>{
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }*/

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

    // TODO: better job of transforming error for User consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${environment.apiUrl}/users/${id}`;
  
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  updateUser(user: User| number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${environment.apiUrl}/users/${id}`;
  
    return this.http.patch<User>(url, this.httpOptions).pipe(
      tap(_ => console.log(`update User id=${id}`)),
      catchError(this.handleError<User>('updateUser'))
    );
  }
}
