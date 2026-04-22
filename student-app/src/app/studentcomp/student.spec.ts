import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcompComponent } from './student';

describe('StudentcompComponent', () => {
  let component: StudentcompComponent;
  let fixture: ComponentFixture<StudentcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentcompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentcompComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
