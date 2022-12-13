/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutwardRecipePredictionComponent } from './outwardRecipePrediction.component';

describe('OutwardRecipePredictionComponent', () => {
  let component: OutwardRecipePredictionComponent;
  let fixture: ComponentFixture<OutwardRecipePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardRecipePredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardRecipePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
