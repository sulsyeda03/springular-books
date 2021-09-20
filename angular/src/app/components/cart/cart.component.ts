import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
  

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService ,private  cartService:CartService, private userService:UserService,private router:Router ) {
    
    this.subtotal = this.cartService.getTotal();
    this.tax = this.subtotal * 0.07;
    this.total = this.subtotal + this.tax;
  }

data:any
  
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
  // submit(){
  //   console.log("clicked...")
  //   this.dataService.sendCart(this.total,this.tax,this.books, this.userService.getUser());
  //   this.router.navigate(['/checkout'])
    
  // }

  submit(){
    this.userService.getUser().subscribe(data => 
      {
        this.user = data;
      })
    this.dataService.sendCart(this.tax, this.total ,this.books, this.user).subscribe(data=>{
      this.data = data;
      console.log(data);
    });
    this.cartService.deleteAll();

    
    this.router.navigate(['/checkout'])

  }

  deleteAll(){
    this.cartService.deleteAll();
  }


}