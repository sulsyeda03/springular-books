  
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service'
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any;
  user: any = null;
  incorect = false;
  

  constructor(private userService:UserService, private router:Router, private cartService:CartService,) { }

  ngOnInit(): void {
  }

  
  onSubmit(username:string, password:string){
    this.userService.login(username, password).subscribe(data=>{
      this.user = data;
      console.log(data);
     
    
   if (this.user != null){
    console.log('if statement')  
    localStorage.setItem("user", this.user);
    this.router.navigate(['/body'])
      
   }else{
    console.log('else statement') 
    this.router.navigate(['/login'])
    this.incorect = true;

  }

 
})
}

}