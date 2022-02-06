import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from '../../config';
import { Tokens } from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{

  private loggedUser: any;
  private isAuthenticated !: boolean;

  constructor(private http: HttpClient) {}
/*
  login(user: { username: string, password: string }): Observable<boolean> 
  { 
    return this.http.post<any>(`${config.apiUrl}/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() 
  {
    retu
  }

  isLoggedIn() 
  {
    return !!this.getJwtToken();
  }

 */ 
}
