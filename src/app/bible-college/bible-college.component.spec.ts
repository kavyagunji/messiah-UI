import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleCollegeComponent } from './bible-college.component';

describe('BibleCollegeComponent', () => {
  let component: BibleCollegeComponent;
  let fixture: ComponentFixture<BibleCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibleCollegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
