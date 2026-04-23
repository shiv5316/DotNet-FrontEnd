import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormArray,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-formarray-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formarray-demo.html'
})
export class FormarrayDemo {

  myForm = new FormGroup({
    skills: new FormArray([
      new FormControl('')
    ])
  });

  get skills() {
    return this.myForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl(''));
  }

}