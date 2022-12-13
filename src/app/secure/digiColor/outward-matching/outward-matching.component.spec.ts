import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardMatchingComponent } from './outward-matching.component';

describe('OutwardMatchingComponent', () => {
  let component: OutwardMatchingComponent;
  let fixture: ComponentFixture<OutwardMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutwardMatchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
