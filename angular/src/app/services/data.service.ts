import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ENDPOINTS = {
    // 'API' : 'https://api.itbook.store/1.0/',
    'NEW' : 'https://api.itbook.store/1.0/new',
    'SEARCH' : 'https://api.itbook.store/1.0/search/',
    'DETAILED' : 'https://api.itbook.store/1.0/books/',
    'FEATURED' : 'https://api.itbook.store/1.0/search/featured ',
   
  }
  all: any[] = [this.http.get<any>(this.ENDPOINTS.SEARCH + ".NET Framework"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  this.http.get<any>(this.ENDPOINTS.SEARCH + "3D"),
  
];

  constructor(private http: HttpClient) { }

  // getApi(result: string): Observable<any>{
  //   return this.http.get<any>(this.ENDPOINTS.API + result);
  // }

  getNew(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.NEW);
  }

  getFeatured(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.FEATURED);
  }
  
  getDetailed(n:any):Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.DETAILED + n)
  }
  
  getSearch(n:any, j:any):Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.SEARCH + n + '/' + j)
  }
  
  getNet(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.SEARCH + ".NET Framework");
  }
}