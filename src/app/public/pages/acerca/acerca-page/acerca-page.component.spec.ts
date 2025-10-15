import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaPageComponent } from './acerca-page.component';

describe('AcercaPageComponent', () => {
  let component: AcercaPageComponent;
  let fixture: ComponentFixture<AcercaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcercaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
