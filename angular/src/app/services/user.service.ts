import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/User.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:9091/login/';
  private ENDPOINTS = {
    
  }
  public user = new Subject<any>();

  constructor(private http:HttpClient) { }

  login(username:string, password:string):Observable<IUser>{
    console.log(username, password);
    this.user.next(this.http.post<any>(this.URL, {username: username, password: password})) 
    return this.user;
  }

  getUser(){
    return this.user.asObservable();
  }
  
}