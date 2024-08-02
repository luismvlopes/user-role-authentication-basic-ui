import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:9090"
  
  requestHeader = new HttpHeaders(
    { "No-Auth":"True"}
  );
  constructor(private httpClient: HttpClient) { }

  public login(logindata: any) {
    return this.httpClient.post(this.PATH_OF_API + "/authenticate", logindata, { headers: this.requestHeader })
  }
}
