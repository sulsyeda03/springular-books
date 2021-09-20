import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public books:any = [];
  public subtotal:number = 0;
  public tax: number = 0;
  public total: number = 0;
  

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService ,private  cartService:CartService, private userService:UserService ) {
    
    this.subtotal = this.cartService.getTotal();
    this.tax = this.subtotal * 0.07;
    this.total = this.subtotal + this.tax;
  }


  
public user: any;

  ngOnInit(): void {
    this.cartService.getBooks().subscribe((data) =>{
      this.books = data;
    })
    
  }

  deleteItem(book:any){
    this.cartService.deleteItem(book);
    this.subtotal = this.cartService.getTotal();
    this.tax = this.subtotal * 0.07;
    this.total = this.subtotal + this.tax;
  }
  submit(){
    this.dataService.sendCart(this.subtotal, this.tax ,this.books, this.userService.getUser());
  }
}
