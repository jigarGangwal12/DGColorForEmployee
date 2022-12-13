/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DigiColorinwardComponent } from './DigiColorinward.component';

describe('DigiColorinwardComponent', () => {
  let component: DigiColorinwardComponent;
  let fixture: ComponentFixture<DigiColorinwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigiColorinwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiColorinwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
