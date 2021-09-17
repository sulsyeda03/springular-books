 
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';
  url:string= 'https://httpbin.org/post';
  data:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(usern:string, pw:string){
    this.username = usern;
    this.password = pw;
    console.log(usern, pw);
    this.http.post(this.url, {username: this.username, password: this.password}).subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })
  }
}