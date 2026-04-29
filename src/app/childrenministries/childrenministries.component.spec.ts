import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenministriesComponent } from './childrenministries.component';

describe('ChildrenministriesComponent', () => {
  let component: ChildrenministriesComponent;
  let fixture: ComponentFixture<ChildrenministriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildrenministriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenministriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
