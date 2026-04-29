import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalministriesComponent } from './medicalministries.component';

describe('MedicalministriesComponent', () => {
  let component: MedicalministriesComponent;
  let fixture: ComponentFixture<MedicalministriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalministriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalministriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
