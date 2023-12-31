import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    username: this.fb.control<string>(''),
    password: this.fb.control<string>('')
  })

  public login() {
    const {username, password} = this.loginForm.value
    if (username && password) this.service.login(username, password).subscribe((response: any) => {
      if (response.access) {
        const token = response.access;
        localStorage.setItem('token', token);
        
        this.router.navigate(['projects']).then()
      }
    })
  }

  public constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
    
  }
  
}
