import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodrelifComponent } from './floodrelif.component';

describe('FloodrelifComponent', () => {
  let component: FloodrelifComponent;
  let fixture: ComponentFixture<FloodrelifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloodrelifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloodrelifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
