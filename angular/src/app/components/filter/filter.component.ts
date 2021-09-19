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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Search(search: string){
    this.router.navigate(['/results', search])
  }

  isbnSearch(isbn13: string){
    isbn13 = isbn13.replace(/\s/g, '');
    this.router.navigate(['/detailed',isbn13])
  }


  Reload(){
    location.reload();
  }

}
