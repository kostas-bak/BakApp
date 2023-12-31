import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from 'src/app/interfaces/record';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  projectId: number;
  taskId: number;
  data: Record;

  public constructor(private fb:FormBuilder, private route: ActivatedRoute, private dataService: DataService, private router: Router) {}

  public progressForm = new FormGroup({
    progress: new FormControl(0, [Validators.required, Validators.min(0)]),
    persons: new FormControl(0, [Validators.required, Validators.min(0)]),
    machines: new FormControl(0, [Validators.required, Validators.min(0)]),
    hours: new FormControl(0, [Validators.required, Validators.min(0)]),
    date: new FormControl(new Date, [Validators.required])
  })

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = parseInt(params['projectid']);
      this.taskId = parseInt(params['taskId']);
    })
  }

  submit() {
    const {progress, persons, machines, hours, date} = this.progressForm.value
    const data = {
      project: this.projectId,
      task: this.taskId,
      progress: progress,
      persons_working: persons,
      machines_working: machines,
      hours: hours,
      date: date
    }

    console.log(data)

    this.dataService.postRecord(data).subscribe((res) => {
      this.router.navigate(['projects', this.projectId])
    })    
  }

  onBackToTasks(): void {
    this.router.navigate(['projects', this.projectId])
  }
}
