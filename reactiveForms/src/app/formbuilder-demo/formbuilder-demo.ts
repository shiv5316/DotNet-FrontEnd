import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-formbuilder-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formbuilder-demo.html'
})
export class FormbuilderDemo {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

}