import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolYearCreateComponent } from './school-year-create.component';

describe('SchoolYearCreateComponent', () => {
  let component: SchoolYearCreateComponent;
  let fixture: ComponentFixture<SchoolYearCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolYearCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolYearCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
