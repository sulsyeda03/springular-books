import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  books:any;
  constructor(private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
    this.dataService.getFeatured().subscribe((data) => {
      
      this.books = data;
      console.log(data);
    })
  }

  onClick(book:any){
    this.router.navigate(['/detailed', book.isbn13])
  }

}