import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRoleComponent } from './student-role.component';

describe('StudentRoleComponent', () => {
  let component: StudentRoleComponent;
  let fixture: ComponentFixture<StudentRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
