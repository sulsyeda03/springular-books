import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/social'])
  }

}
