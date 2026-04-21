import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custompipecomp } from './custompipecomp';

describe('Custompipecomp', () => {
  let component: Custompipecomp;
  let fixture: ComponentFixture<Custompipecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Custompipecomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Custompipecomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
