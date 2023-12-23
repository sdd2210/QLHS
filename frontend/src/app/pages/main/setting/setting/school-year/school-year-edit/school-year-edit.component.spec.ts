import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolYearEditComponent } from './school-year-edit.component';

describe('SchoolYearEditComponent', () => {
  let component: SchoolYearEditComponent;
  let fixture: ComponentFixture<SchoolYearEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolYearEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolYearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
