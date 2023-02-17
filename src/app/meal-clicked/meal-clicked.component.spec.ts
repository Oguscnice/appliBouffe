import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealClickedComponent } from './meal-clicked.component';

describe('MealClickedComponent', () => {
  let component: MealClickedComponent;
  let fixture: ComponentFixture<MealClickedComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealClickedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
