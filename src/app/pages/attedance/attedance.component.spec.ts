import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttedanceComponent } from './attedance.component';

describe('AttedanceComponent', () => {
  let component: AttedanceComponent;
  let fixture: ComponentFixture<AttedanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttedanceComponent]
    });
    fixture = TestBed.createComponent(AttedanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
