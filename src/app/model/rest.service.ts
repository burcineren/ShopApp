import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'http://localhost:3500'

  constructor(private http: HttpClient){}

  getProduct(){
    return this.http.get(this.baseUrl + '/products');
  }
}
