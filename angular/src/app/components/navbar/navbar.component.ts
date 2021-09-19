import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public cartItems: number = 0;

  constructor(private router:Router, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks().subscribe(data =>{
      this.cartItems = data.length;
    })
  }

 getNew(){
  this.router.navigate(['/new'])
 }

 login(){
   this.router.navigate(['/login'])
 }

 register(){
  this.router.navigate(['/register'])
}

cart(){
  this.router.navigate(['/cart'])
}

}