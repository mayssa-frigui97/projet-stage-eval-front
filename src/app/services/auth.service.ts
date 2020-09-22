import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(credentials) {
    const url = `${environment.apiUrl}/auth/signin`;

    return this.http.post(url, credentials)
  }
}
