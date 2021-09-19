import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  pageNumber: any = 1;

  search: any;
  books:any;
  newPage: any;
  lastPage: any;

  disabled: any = null;
  disabled2: any = null;


  constructor(private dataService: DataService, private router:Router, private route: ActivatedRoute) { 
    this.search = route.snapshot.paramMap.get('search');
    this.newPage = route.snapshot.paramMap.get('pageNumber'); //new page number passed by decrement/increment

    if(this.newPage == null){ //sets page number to 1 if there isn't a new page
      this.pageNumber == 1;
    }else{
      this.pageNumber=parseFloat(this.newPage) //sets page number to the new page number
    }

    if (this.pageNumber == 1){ //disables decrement when page = 1
      this.disabled2 = "true"
    }

    // if ((this.pageNumber+1) == this.lastPage){
    //   this.disabled = "true"
    // }
  }

  ngOnInit(): void {
    this.dataService.getSearch(this.search, this.pageNumber).subscribe((data) => {
      this.books = data;

      // if (this.books.length === 0){
      //   this.lastPage = this.pageNumber
      //   console.log(this.lastPage)
      // }
    })
  }

  onClick(book:any){
    this.router.navigate(['/detailed', book.isbn13])
  }

  Decrement(pagenum: any){  //Decrement function which reroutes to the new page 
    if(pagenum > 1){
      this.pageNumber -= 1
      this.router.navigate(['/results', this.search, this.pageNumber])
    }else if(pagenum==1){
      this.pageNumber = pagenum
    }
  }

  Increment(){
    this.pageNumber += 1
    this.router.navigate(['/results', this.search, this.pageNumber])
  }

  Reload(){
    location.reload();
  }

}