import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';




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
  

  constructor(private activatedRoute:ActivatedRoute, private  cartService:CartService, ) {
    this.books.push = activatedRoute.snapshot.paramMap.get('book');
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

  delete(book:any){
    this.cartService.deleteItem(book);
    this.total = this.cartService.getTotal();
  }

  deleteAll(){
    this.cartService.deleteAll();
    this.total = this.cartService.getTotal();
  }
}
