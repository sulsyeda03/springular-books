import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'https://httpbin.org/post';
  private ENDPOINTS = {
    
  }

  constructor(private http:HttpClient) { }

  login(username:string, password:string): Observable<User>{
    console.log(username, password);
    return this.http.post<any>(this.URL, {username: username, password: password})
  }
}
