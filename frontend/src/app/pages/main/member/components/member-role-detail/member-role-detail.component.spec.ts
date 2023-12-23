import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRoleDetailComponent } from './member-role-detail.component';

describe('MemberRoleDetailComponent', () => {
  let component: MemberRoleDetailComponent;
  let fixture: ComponentFixture<MemberRoleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberRoleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
