import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): string[] {
    return ['Angular', 'React', '.NET', 'Java', 'Python'];
  }
}