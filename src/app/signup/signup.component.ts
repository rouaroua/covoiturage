import { Component, OnInit } from '@angular/core';
import { JwtService } from '../service/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private service: JwtService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  submitForm() {
      console.log( this.registerForm.value);
      this.service.register(this.registerForm.value).subscribe(
        (response)=>{
          if(response.id !=null){
            alert("Hello " + response.name);
          }
        }
      )
  }
}
