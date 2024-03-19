import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:8080/api/loginuser";
  constructor(private http:HttpClient) { }

  loginUser(obj:any){
     return (this.http.post(this.url,obj));
  }


}
