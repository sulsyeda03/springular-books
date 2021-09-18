import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  search: string = '';
  isbn13: string = '';
  category: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  result ="";

  Search(search: string){
    
    this.router.navigate(['/results', search])
  }

  isbnSearch(isbn: string){
    this.router.navigate(['/results', isbn])
    // this.router.navigate(['/detailed', isbn])
  }

  catSearch(category: string){
    
    this.router.navigate(['/results', category])
  }
 

  Reload(){
    location.reload();
  }

}