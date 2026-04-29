import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenministriesComponent } from './menministries.component';

describe('MenministriesComponent', () => {
  let component: MenministriesComponent;
  let fixture: ComponentFixture<MenministriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenministriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenministriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
