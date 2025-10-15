import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaPageComponent } from './ayuda-page.component';

describe('AyudaPageComponent', () => {
  let component: AyudaPageComponent;
  let fixture: ComponentFixture<AyudaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyudaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
