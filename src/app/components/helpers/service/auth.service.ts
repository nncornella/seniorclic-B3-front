import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './../models/login-user';
import { NewUser } from '../models/new-user';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
//
  apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}
  
  login(loginUser: LoginUser) {
    console.log('Login user:'+`${this.apiUrl}auth/login`, loginUser);

    return this.http.post(`${this.apiUrl}auth/login`, loginUser, {
      withCredentials: true,
    });
  }

  register(newUser: NewUser) {
    //console.log('Registering user:'+`${this.apiUrl}auth/register`, newUser);
    //console.log('Registering user:', newUser);
    
    return this.http.post(`${this.apiUrl}auth/register`, newUser, {
      withCredentials: true,
    });
  }

  getDetails(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}auth/user/details`, {
      withCredentials: true,
    });
  }

  logout() {
    return this.http.post(`${this.apiUrl}auth/logout`, null, {
      withCredentials: true,
    });
  }

}
