import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCount } from './course-count';

describe('CourseCount', () => {
  let component: CourseCount;
  let fixture: ComponentFixture<CourseCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCount],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
