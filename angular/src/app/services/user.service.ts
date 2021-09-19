import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'https://httpbin.org/post';
  private ENDPOINTS = {
    
  }
  public user = new Subject<any>();
  //public user:any;
  constructor(private http:HttpClient) { }

  login(username:string, password:string):Observable<User>{
    console.log(username, password);
    this.user.next(this.http.post<any>(this.URL, {username: username, password: password})) 
    return this.user;
  }

  getUser(){
    return this.user.asObservable();
  }

}
