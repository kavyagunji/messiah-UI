import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayertowerComponent } from './prayertower.component';

describe('PrayertowerComponent', () => {
  let component: PrayertowerComponent;
  let fixture: ComponentFixture<PrayertowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrayertowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayertowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
