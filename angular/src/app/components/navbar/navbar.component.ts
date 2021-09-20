import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user:any;
  public cartItems: number = 0;

  constructor(private router:Router, private cartService:CartService, private userService:UserService ) { }

  ngOnInit(): void {
    this.cartService.getBooks().subscribe(data =>{
      this.cartItems = data.length;
    })

    this.userService.getUser().subscribe(data =>{
      this.user = data;
    })
  }

 getNew(){
  this.router.navigate(['/new'])
 }

 login(){
   this.router.navigate(['/login'])
 }

 logout(){
   this.user = null;
   this.router.navigate(['/login'])
 }

 register(){
  this.router.navigate(['/register'])
}

cart(){
  this.router.navigate(['/cart'])
}

}