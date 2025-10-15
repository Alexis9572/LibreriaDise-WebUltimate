import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaPagesComponent } from './carga-pages.component';

describe('CargaPagesComponent', () => {
  let component: CargaPagesComponent;
  let fixture: ComponentFixture<CargaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargaPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
