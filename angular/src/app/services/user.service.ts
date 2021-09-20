import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'https://httpbin.org/post';
  private ENDPOINTS = {
  }

  public u = new BehaviorSubject<any>('');
  public user:any;
  
  constructor(private http:HttpClient) { }

  login(username:string, password:string): Observable<User>{
    this.user = this.http.post<any>(this.URL, {email: username, password: password})
    this.http.post<any>(this.URL, {email: username, password: password}).subscribe(data =>{
      this.u.next(data);
      console.log(this.u.value);
    })
    return this.user;
  }
  
  getUser(){
    return this.u.asObservable();
  }
}
