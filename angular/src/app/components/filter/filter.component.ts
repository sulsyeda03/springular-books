import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  search: string = '';
  isbn13: string = '';
  category: string = '';
  public cartItems: number = 0;
  public books:any = [];

  constructor(private router: Router, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks().subscribe(data =>{
      this.cartItems = data.length;
    })

  
  }

  result ="";

  Search(search: string){
    
    this.router.navigate(['/results', search])
  }

  isbnSearch(isbn13: string){
    isbn13 = isbn13.replace(/\s/g, '');
    this.router.navigate(['/results', isbn13])
    // this.router.navigate(['/detailed', isbn])
  }

  catSearch(category: string){
    
    this.router.navigate(['/results', category])
  }
 

  Reload(){
    this.cartService.getBooks().subscribe((data) =>{
      this.books = data;
    })
    location.reload();
  }

}