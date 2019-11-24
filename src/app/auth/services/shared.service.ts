import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  public register(userData:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/v1/users/register',userData);
  }
}
