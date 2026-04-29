import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InthenewsComponent } from './inthenews.component';

describe('InthenewsComponent', () => {
  let component: InthenewsComponent;
  let fixture: ComponentFixture<InthenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InthenewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InthenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
