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

  getUsers(): Observable<User[]>{
    const url =`${environment.apiUrl}/users`;
    return this.http.get<User[]> (url, this.httpOptions);
  }

  getUsersOfPole(PoleId : number): Observable<User[]>{
    const url =`${environment.apiUrl}/users/?pole=${PoleId}`;
    return this.http.get<User[]> (url, this.httpOptions);
  }

  getUser(id : number):Observable<User>{
    const url =`${environment.apiUrl}/users/${id}`;
    return this.http.get<User>(url,this.httpOptions);
  }

  getRH(): Observable<User[]>{
    const url =`${environment.apiUrl}/users/RH`;
    return this.http.get<User[]> (url, this.httpOptions);
  }

  getRP(): Observable<User[]>{
    const url =`${environment.apiUrl}/users/RP`;
    return this.http.get<User[]> (url, this.httpOptions);
  }

  getColPole(): Observable<User[]>{
    const url =`${environment.apiUrl}/users/colaborateur/pole`;
    return this.http.get<User[]> (url, this.httpOptions);
  }

  addUser(credentials):Observable<any>{
    const url =`${environment.apiUrl}/users`;
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

  updateUser(user: User): Observable<any>{
    const url = `${environment.apiUrl}/users/${user.id}`;
    return this.http.put(url,user, this.httpOptions).pipe(
      tap(_ => console.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  getPublicContent(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url + 'all', { responseType: 'text' });
  }

  getRhBoard(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url + 'rh', { responseType: 'text' });
  }

  getRpBoard(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url + 'rp', { responseType: 'text' });
  }

  getColaborateurBoard(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url + 'colaborateur', { responseType: 'text' });
  }

  getSuperBoard(): Observable<any> {
    return this.http.get(url + 'super', { responseType: 'text' });
  }

  // content = '';

  // constructor(private userService: UserserviceService) { }

  // ngOnInit(): void {
  //   this.userService.getColaborateurBoard().subscribe(
  //     data => {
  //       this.content = data;
  //     },
  //     err => {
  //       this.content = JSON.parse(err.error).message;
  //     }
  //   );
  // }
}
