import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Builtinpipes } from './builtinpipes';

describe('Builtinpipes', () => {
  let component: Builtinpipes;
  let fixture: ComponentFixture<Builtinpipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Builtinpipes],
    }).compileComponents();

    fixture = TestBed.createComponent(Builtinpipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
