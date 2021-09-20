import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  books:any;
  constructor(private dataService: DataService, private router:Router,  private cartService: CartService) { }

  ngOnInit(): void {
    this.dataService.getNew().subscribe((data) => {
      
      this.books = data.books;
      console.log(data);
      this.books.forEach((book:any) => {
        Object.assign(book,{quantity:1},{cost:parseFloat((book.price).replace(/\$|,/g, ''))})
      });
    })
  }

  onClick(book:any){
    this.router.navigate(['/detailed', book.isbn13])
  }
  addtoCart(book:any){
    this.cartService.addtoCart(book);
  }

}