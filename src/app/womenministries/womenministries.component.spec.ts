import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenministriesComponent } from './womenministries.component';

describe('WomenministriesComponent', () => {
  let component: WomenministriesComponent;
  let fixture: ComponentFixture<WomenministriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenministriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenministriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
