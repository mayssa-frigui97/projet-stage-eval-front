import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';

const url = `${environment.apiUrl}/users`;

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
    return this.http.get<User[]> (url, this.httpOptions);
  }

  getUser(id : number):Observable<User>{
    const url =`${environment.apiUrl}/users/${id}`;
    return this.http.get<User>(url+`${id}`,this.httpOptions);
  }

  addUser(credentials):Observable<any>{
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

    // TODO: better job of transforming error for User consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
  
    return this.http.delete<User>(url+`${id}`, this.httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  updateUser(user: User): Observable<any>{
    return this.http.put(url+`${user.id}`,user, this.httpOptions).pipe(
      tap(_ => console.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  getPublicContent(): Observable<any> {
    return this.http.get(url + 'all', { responseType: 'text' });
  }

  getRhBoard(): Observable<any> {
    return this.http.get(url + 'rh', { responseType: 'text' });
  }

  getRpBoard(): Observable<any> {
    return this.http.get(url + 'rp', { responseType: 'text' });
  }

  getColaborateurBoard(): Observable<any> {
    return this.http.get(url + 'colaborateur', { responseType: 'text' });
  }

  getSuperBoard(): Observable<any> {
    return this.http.get(url + 'super', { responseType: 'text' });
  }
}
