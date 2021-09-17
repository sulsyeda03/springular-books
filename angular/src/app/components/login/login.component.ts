import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service'
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

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  
  onSubmit(username:string, password:string){
    this.userService.login(username, password).subscribe(data=>{
      this.data = data;
      console.log(data);
    })
  }
}
