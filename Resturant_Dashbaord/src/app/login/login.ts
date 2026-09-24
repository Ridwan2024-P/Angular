import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
    errorMessage: string = '';

     
    constructor(private router:Router, private http : HttpClient){}
   loginForm =  new FormGroup({
    email:new FormControl('',[
      Validators.required,Validators.email
    ]),
    password: new FormControl('')

  })
 
  onSubmit() {
    if (this.loginForm.invalid) {
    this.errorMessage = 'Please fill in valid credentials.';
    }
    const { email, password } = this.loginForm.value;

    this.http.get<any[]>('/login.json').subscribe(users => {
      const admin = users.find(u => u.email===email && u.password === password && u.role === "admin");
       const  employee = users.find(u => u.email===email && u.password === password && u.role === "employee");
      
      
      if (admin) {
      localStorage.setItem('admin', JSON.stringify(admin));
        this.router.navigate(['/dashboard']);
      }
      if (employee) {
      localStorage.setItem('employee', JSON.stringify(employee));
        this.router.navigate(['/dashboard']);
      } else {
      
        alert(  this.errorMessage = 'Invalid email or password')
      }
    });
  }
}


   
