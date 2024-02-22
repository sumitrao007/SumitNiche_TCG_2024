import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl:string="http://localhost:8080/api/student";

  constructor(private http:HttpClient) { }

    getRecord(){
     return (this.http.get(this.baseUrl));
    }


}
