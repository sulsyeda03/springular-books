import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service'
import { Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  
  onSubmit(username:string, password:string){
    this.userService.login(username, password).subscribe(data=>{
      this.user = data;
      console.log(data);
      if (this.user == null){
        location.reload();
      }
      else{
        localStorage.setItem("user", this.user);
      }
    })
  }
}
