import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  register(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.postService('registration', data, false, header)
  }

  login(data:any){
    console.log("login details api", data);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('login', data, false, header)
  }
}
