import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService, Student } from '../student';

@Component({
  selector: 'app-studentcomp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentcompComponent {

  student: Student = {
    name: '',
    age: 0,
    dept: ''
  };

  constructor(private service: StudentService, private router: Router) {}

    submit() {
      this.service.addStudent(this.student).subscribe(() => {
        alert('Student Added');
        this.student = { name: '', age: 0, dept: '' };
      });
    }

    goToList() {
      this.router.navigate(['/students']);
  }
}