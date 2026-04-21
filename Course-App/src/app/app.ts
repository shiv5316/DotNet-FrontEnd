import { Component } from '@angular/core';
import { CourseListComponent } from './course-list/course-list';
import { CourseCountComponent } from './course-count/course-count';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseListComponent, CourseCountComponent],
  templateUrl: './app.html'
})
export class AppComponent {}