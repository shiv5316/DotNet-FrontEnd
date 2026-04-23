import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  Validators
} from '@angular/forms';

import { FormgroupDemo } from './formgroup-demo/formgroup-demo';
import { FormarrayDemo } from './formarray-demo/formarray-demo';
import { FormbuilderDemo } from './formbuilder-demo/formbuilder-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormgroupDemo,
    FormarrayDemo,
    FormbuilderDemo
  ],
  templateUrl: './app.html'
})
export class App {

  // Task 1
  name = new FormControl('', Validators.required);

}