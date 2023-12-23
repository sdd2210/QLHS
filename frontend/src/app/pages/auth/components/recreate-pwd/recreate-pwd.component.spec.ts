import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreatePwdComponent } from './recreate-pwd.component';

describe('RecreatePwdComponent', () => {
  let component: RecreatePwdComponent;
  let fixture: ComponentFixture<RecreatePwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecreatePwdComponent]
    });
    fixture = TestBed.createComponent(RecreatePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
