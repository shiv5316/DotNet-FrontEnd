import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayDemo } from './formarray-demo';

describe('FormarrayDemo', () => {
  let component: FormarrayDemo;
  let fixture: ComponentFixture<FormarrayDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormarrayDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(FormarrayDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
