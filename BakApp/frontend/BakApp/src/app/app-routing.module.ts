import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'projects', component: DashboardComponent},
  {path:'projects/:projectid', component: TasksComponent},
  {path:'projects/:projectid/tasks/:taskId', component: ProgressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
