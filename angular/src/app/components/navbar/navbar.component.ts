import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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