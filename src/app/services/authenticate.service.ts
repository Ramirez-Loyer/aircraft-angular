
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  constructor(private http:HttpClient) { }

  public getUser(user:User) : Observable<User[]>{
    return this.http.get<User[]> (environment.host + `/users?email=${user.email}&password=${user.password}`)
  }

 
}
