import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerStatusComponent } from './trainer-status.component';

describe('TrainerStatusComponent', () => {
  let component: TrainerStatusComponent;
  let fixture: ComponentFixture<TrainerStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerStatusComponent]
    });
    fixture = TestBed.createComponent(TrainerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
