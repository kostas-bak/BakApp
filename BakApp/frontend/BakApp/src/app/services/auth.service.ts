import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/api/token/', { username, password }, {headers: new HttpHeaders({'Content-Type': 'application/json'})})
  }
}
