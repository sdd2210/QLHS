import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPositionComponent } from './main-position.component';

describe('MainPositionComponent', () => {
  let component: MainPositionComponent;
  let fixture: ComponentFixture<MainPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
