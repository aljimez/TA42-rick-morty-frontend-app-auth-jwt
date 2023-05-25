import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const APIURL = 'https://jmm-spring-api-h2-angular.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getContent(): Observable<any> {
    return this.http.get(APIURL + 'all', { responseType: 'text' });
  }

}
