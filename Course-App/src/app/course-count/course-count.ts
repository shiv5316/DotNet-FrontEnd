import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course';

@Component({
  selector: 'app-course-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-count.html'
})
export class CourseCountComponent {

  courses: string[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}