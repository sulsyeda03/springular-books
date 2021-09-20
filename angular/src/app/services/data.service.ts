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
    'test': 'https://httpbin.org/post'
  }

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
  
  getSearch(n:any):Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.SEARCH + n)
  }

  // login(username:string, password:string): Observable<User>{
  //   this.user = this.http.post<any>(this.URL, {email: username, password: password})
  //   this.http.post<any>(this.URL, {email: username, password: password}).subscribe(data =>{
  //     this.u.next(data);
  //     console.log(this.u.value);
  //   })
  //   return this.user;
  // }

  pushData(book:any, user:any){
    this.http.post<any>(this.ENDPOINTS.test, {isbn: book.isbn13, price:book.cost, customer: user.custId}).subscribe(data=>{
      console.log(data)
    })
  }

}