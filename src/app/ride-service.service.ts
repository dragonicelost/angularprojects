import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login/Login';
import { Observable } from 'rxjs';

@Injectable()
export class RideServiceService {

  private url:string="./assets/users.json"
  constructor(private  http : HttpClient) { }

  getUsers():Observable<Login[]>
  {

      return this.http.get<Login[]>(this.url);
  }
  // addRide(from):Observable<boolean>
  // {
  //   // return this.http.post();
  // }
}
