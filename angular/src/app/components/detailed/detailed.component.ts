import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

  isbn: any;
  book: any;
  constructor(private dataService: DataService, activatedRoute:ActivatedRoute) {
    
    this.isbn = activatedRoute.snapshot.paramMap.get('isbn13');

  }

  ngOnInit(): void {
    this.dataService.getDetailed(this.isbn).subscribe(response =>{
      this.book = response;
    })
  }

}
