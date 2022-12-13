import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeMatchingComponent } from './shade-matching.component';

describe('ShadeMatchingComponent', () => {
  let component: ShadeMatchingComponent;
  let fixture: ComponentFixture<ShadeMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadeMatchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
