import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderDemo } from './formbuilder-demo';

describe('FormbuilderDemo', () => {
  let component: FormbuilderDemo;
  let fixture: ComponentFixture<FormbuilderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormbuilderDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(FormbuilderDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
