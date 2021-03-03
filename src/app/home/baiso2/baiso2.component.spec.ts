import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baiso2Component } from './baiso2.component';

describe('Baiso2Component', () => {
  let component: Baiso2Component;
  let fixture: ComponentFixture<Baiso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baiso2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baiso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
