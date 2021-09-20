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
 public total:Number = 0;
  constructor(private activatedRoute:ActivatedRoute, private  cartService:CartService) {
    this.books.push = activatedRoute.snapshot.paramMap.get('book');
  }

  public user: any;

  ngOnInit(): void {
    this.cartService.getBooks().subscribe((data) =>{
      this.books = data;
    })
    this.total = this.cartService.getTotal()
  }
}
