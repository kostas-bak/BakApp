import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { Task } from '../interfaces/task';
import { Record } from '../interfaces/record';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }

  public getProjects() {

    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Project[]>('http://127.0.0.1:8000/api/projects/', {headers: headers})
  }


  public getTasks(id: number) {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`http://127.0.0.1:8000/api/projects/${id}/`, {headers: headers})
  }

  public postRecord(data:Record) {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post('http://127.0.0.1:8000/api/records/', data, {headers: headers})
  }
}
