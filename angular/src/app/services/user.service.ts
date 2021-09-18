import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:9091/login/';
  private ENDPOINTS = {
    
  }

  constructor(private http:HttpClient) { }

  login(username:string, password:string): Observable<IUser>{
    console.log(username, password);
    return this.http.post<IUser>(this.URL, {email: username, password: password})
  }

  
}