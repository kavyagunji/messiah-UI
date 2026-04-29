import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthministriesComponent } from './youthministries.component';

describe('YouthministriesComponent', () => {
  let component: YouthministriesComponent;
  let fixture: ComponentFixture<YouthministriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YouthministriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouthministriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
