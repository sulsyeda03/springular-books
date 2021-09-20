import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: any = [];
  public books = new BehaviorSubject<any>([]);

  constructor() { 
    if (localStorage.getItem('cart')){
      this.getCart();
    }
  }

  getCart(){
    if(localStorage.getItem('cart') != null){
      this.cartItems = localStorage.getItem('cart');
      this.cartItems = JSON.parse(this.cartItems);
      this.books.next(this.cartItems);
    }
  }

  getBooks(){
    return this.books.asObservable();
  }


  addtoCart(book : any){
    if (localStorage.getItem('cart') != ''){
      let myCart: any = localStorage.getItem('cart');
      myCart = JSON.parse(myCart);
        this.cartItems.push(book);
        this.books.next(this.cartItems);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    else{
      this.cartItems.push(book);
      this.books.next(this.cartItems);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    
    //localStorage.setItem('cart', this.cartItems);
  }

  deleteItem(book:any){
    this.cartItems.map((b:any, index:any)=>{
      if (book.isbn13 === b.isbn13){
        this.cartItems.splice(index,1);
      }
    })
    this.books.next(this.cartItems);
    localStorage.setItem('cart', this.cartItems);
    this.getTotal();
    if(this.cartItems.length == 0){
      localStorage.removeItem('cart');
    }
  }

  deleteAll(){
    this.cartItems = [];
    this.books.next(this.cartItems);
    localStorage.setItem('cart',this.cartItems);
    if(this.cartItems.length == 0){
      localStorage.removeItem('cart');
    }
  }

  getTotal():any{
    let total = 0;
    this.cartItems.map((book:any)=>{
      total += book.cost;

    })
    return total;
  }
}