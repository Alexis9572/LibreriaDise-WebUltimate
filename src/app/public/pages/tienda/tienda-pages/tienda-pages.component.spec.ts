import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaPagesComponent } from './tienda-pages.component';

describe('TiendaPagesComponent', () => {
  let component: TiendaPagesComponent;
  let fixture: ComponentFixture<TiendaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
