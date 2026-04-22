import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student, StudentService } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  loading = false;

  constructor(private service: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.service.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: () => {
        this.students = [];
        this.loading = false;
      }
    });
  }

  goToForm(): void {
    this.router.navigate(['/']);
  }
}
