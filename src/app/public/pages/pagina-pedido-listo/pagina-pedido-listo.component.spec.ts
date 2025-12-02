import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPedidoListoComponent } from './pagina-pedido-listo.component';

describe('PaginaPedidoListoComponent', () => {
  let component: PaginaPedidoListoComponent;
  let fixture: ComponentFixture<PaginaPedidoListoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaPedidoListoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPedidoListoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
