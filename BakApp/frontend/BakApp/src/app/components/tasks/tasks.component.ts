import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  projectId: number;
  tasks:any = []
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = parseInt(params['projectid'])
      console.log(this.projectId)
    })

    this.dataService.getTasks(this.projectId).subscribe((res)=> {
      this.tasks = res;
      console.log(res);
    })
  }

  onSelectTask(taskid:number): void {
    this.router.navigate([`projects/${this.projectId}/tasks/${taskid}`])
  }

  onBackToProjects(): void {
    this.router.navigate(['projects'])
  }
}
