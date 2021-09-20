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
  //   let isinCart = false;
  //   if (this.cartItems.length == 0){
  //     this.cartItems.push(book);
  //     this.books.next(this.cartItems);
  //   } else if (this.cartItems.length > 0) {
  //     for(let i = 0; i < this.cartItems.length; i++){
  //       if(this.cartItems[i] == book.isbn13){
  //         isinCart=true;
  //       }else{
  //         isinCart = false;
  //         this.cartItems.push(book);
  //         this.books.next(this.cartItems);
  //       }
  //     }
  //   }
  //     return isinCart
  //     console.log(isinCart);
       
  }

}
    //   for(let i = 0; i< this.cartItems.length; i++){
    //     if (book.isbn13 == this.cartItems[i].isbn13){
    //       isinCart = true;
    //       this.cartItems[i].quantity += 1;
    //     }
    //     else if(isinCart != true && i == this.cartItems.length){
    //       this.cartItems.push(book);
    //       this.books.next(this.cartItems);
    //     }
    //   }

    // }

  
