import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSystemComponent } from './position-system.component';

describe('PositionSystemComponent', () => {
  let component: PositionSystemComponent;
  let fixture: ComponentFixture<PositionSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
