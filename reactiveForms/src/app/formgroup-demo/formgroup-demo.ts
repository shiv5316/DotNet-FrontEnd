import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-formgroup-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formgroup-demo.html'
})
export class FormgroupDemo {

  submittedData: any = '';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  submitForm() {
    this.submittedData = this.loginForm.value;
  }

  resetForm() {
    this.loginForm.reset();
  }

  patchData() {
    this.loginForm.patchValue({
      email: 'test@gmail.com'
    });
  }

  setData() {
    this.loginForm.setValue({
      email: 'admin@gmail.com',
      password: '12345'
    });
  }

}