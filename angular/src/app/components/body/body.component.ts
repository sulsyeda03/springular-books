import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  search:any;
  books:any;
 
  constructor(private dataService: DataService, private router:Router, private route: ActivatedRoute, private cartService: CartService) {
    this.search = route.snapshot.paramMap.get('search');
  }
  ngOnInit(): void {
    this.dataService.getFeatured().subscribe((data) => {
      this.books = data.books;
      console.log(this.books);
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