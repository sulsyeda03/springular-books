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
    'BACKEND' : 'http://localhost:9091/orders/'
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

  sendCart(tax:number ,total:number,books:any, user:any):Observable<any>{
    
    return this.http.post<any>(this.ENDPOINTS.BACKEND, {totalItems:books.length, totalOrderCost:total, tax: tax,customer:user})
  }


  // sendCart(tax:number ,total:number,books:any, user:any):Observable<any>{
  //   console.log("clicked. inside sendCart..")
  //   return this.http.post<any>(this.ENDPOINTS.BACKEND, {totalItems:books.length, totalOrderCost:total,tax:tax,customer:user})
    
  // }
}

// login(username:string, password:string):Observable<IUser>{
//   this.user = this.http.post<any>(this.URL, {email: username, password: password})
//   this.http.post<any>(this.URL, {email: username, password: password}).subscribe(data =>{
//     this.u.next(data);
//     console.log(this.u.value);
//   })
//   return this.user;
// }
