import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;  // Use non-null assertion to guarantee initialization

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    // Initialize loginForm in ngOnInit
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm(){
    this.service.login(this.loginForm.value).subscribe(
      (response)=>{
        console.log(response);
        const jwtToken = response.jwt;
      localStorage.setItem('jwt',jwtToken); 
      this.router.navigateByUrl("/welcome");
    }
    )
  }
}
