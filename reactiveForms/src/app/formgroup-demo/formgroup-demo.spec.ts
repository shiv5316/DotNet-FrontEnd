import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupDemo } from './formgroup-demo';

describe('FormgroupDemo', () => {
  let component: FormgroupDemo;
  let fixture: ComponentFixture<FormgroupDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(FormgroupDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
