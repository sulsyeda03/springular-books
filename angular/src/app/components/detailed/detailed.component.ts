import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service'; 
@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

  isbn: any;
  book: any;
  constructor(private dataService: DataService,private cartService: CartService ,activatedRoute:ActivatedRoute) {
    
    this.isbn = activatedRoute.snapshot.paramMap.get('isbn13');

  }

  ngOnInit(): void {
    this.dataService.getDetailed(this.isbn).subscribe(response =>{
      this.book = response;
      console.log(response);
      Object.assign(this.book,{quantity:1},{cost:parseFloat((this.book.price).replace(/\$|,/g, ''))})
    })
  }

  addtoCart(book:any){
    this.cartService.addtoCart(book);
    
  }

}
