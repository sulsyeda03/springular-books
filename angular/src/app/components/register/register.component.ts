import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service'
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private cartService:CartService,) { }

  ngOnInit(): void {
  }

}
