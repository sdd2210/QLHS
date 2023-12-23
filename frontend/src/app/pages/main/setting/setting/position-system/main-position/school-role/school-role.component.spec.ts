import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoleComponent } from './school-role.component';

describe('SchoolRoleComponent', () => {
  let component: SchoolRoleComponent;
  let fixture: ComponentFixture<SchoolRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
