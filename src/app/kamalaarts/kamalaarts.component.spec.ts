import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamalaartsComponent } from './kamalaarts.component';

describe('KamalaartsComponent', () => {
  let component: KamalaartsComponent;
  let fixture: ComponentFixture<KamalaartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KamalaartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamalaartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
