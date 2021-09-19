  
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service'
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  
  onSubmit(username:string, password:string){
    this.userService.login(username, password).subscribe(data=>{
      this.data = data;
      console.log(data);
      
    })
    this.router.navigate(['/body'])
  }
}