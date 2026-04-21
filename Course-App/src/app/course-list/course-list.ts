import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html'
})
export class CourseListComponent {

  courses: string[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}