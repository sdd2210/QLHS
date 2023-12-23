import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLevelComponent } from './subject-level.component';

describe('SubjectLevelComponent', () => {
  let component: SubjectLevelComponent;
  let fixture: ComponentFixture<SubjectLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
