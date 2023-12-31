import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Project } from "../../interfaces/project"
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }
  data:Project[] = []
  tasks:any = []

  ngOnInit(): void {
    
    this.dataService.getProjects().subscribe((res)=> {
      this.data = res;
      console.log(this.data);
    })
  }

  onSelectProject(project:Project): void {
    // this.dataService.getTasks(project.id).subscribe((res)=> {
    //   this.tasks = res;
    //   console.log(res);
    // })
    const projectId = project.id
    this.router.navigate(['projects', projectId])
  }

  onLogOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
