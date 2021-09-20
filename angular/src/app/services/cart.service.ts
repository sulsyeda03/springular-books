import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: any = [];
  public books = new BehaviorSubject<any>([]);

  constructor() { }

  getBooks(){
    return this.books.asObservable();
  }


  addtoCart(book : any){
    this.cartItems.push(book);
    this.books.next(this.cartItems);
    console.log(this.cartItems);
    console.log(this.books);
  }

  deleteItem(book:any){
    this.cartItems.map((b:any, index:any)=>{
      if (book.id === b.id){
        this.cartItems.splice(index,1);
      }
    })
    this.books.next(this.cartItems);
  }

  deleteAll(){
    this.cartItems = [];
    this.books.next(this.cartItems);
  }

  getTotal():any{
    let total = 0;
    this.cartItems.map((book:any)=>{
      total += book.cost;
    })
    return total;
  }
}
