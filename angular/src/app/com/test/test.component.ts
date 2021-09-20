import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private URL="https://api.itbook.store/1.0/books/"
  isbn = 9781119490463;
  
  constructor() { }

  ngOnInit(): void {
  }

}
