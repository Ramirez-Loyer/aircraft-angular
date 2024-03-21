
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

  public getUser(value: any) : Observable<User[]>{
    return this.http.get<User[]> (environment.host + `/aircrafts?prog_like=${value}`)
  
  }
}
