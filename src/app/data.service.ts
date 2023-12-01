import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users' ;

  constructor(private http: HttpClient) { }

  saveRecord(data: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', this.saveRecord, data);
   
  }
  getAllDetails(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')

  }
  
  getDetailsById(userId: string): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users ')
  }
}
