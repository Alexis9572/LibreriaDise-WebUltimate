import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEnvioComponentComponent } from './detalle-envio-component.component';

describe('DetalleEnvioComponentComponent', () => {
  let component: DetalleEnvioComponentComponent;
  let fixture: ComponentFixture<DetalleEnvioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleEnvioComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEnvioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
