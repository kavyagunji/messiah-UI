import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidowcareministriesComponent } from './widowcareministries.component';

describe('WidowcareministriesComponent', () => {
  let component: WidowcareministriesComponent;
  let fixture: ComponentFixture<WidowcareministriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidowcareministriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidowcareministriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
