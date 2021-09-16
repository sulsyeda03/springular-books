import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ENDPOINTS = {
    'NEW' : 'https://api.itbook.store/1.0/new',
    'SEARCH' : 'https://api.itbook.store/1.0/search/',
    'DETAILED' : 'https://api.itbook.store/1.0/books/',
    'FEATURED' : 'https://api.itbook.store/1.0/search/featured ',
    'FREE' : 'https://api.itbook.store/1.0/free'
  }

  constructor(private http: HttpClient) { }

  getNew(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.NEW);
  }

  getFeatured(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.FEATURED);
  }
  
  getDetailed(n:any):Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.DETAILED + n)
  }
  getFree():Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.FREE)
  }
}