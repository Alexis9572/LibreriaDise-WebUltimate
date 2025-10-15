import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePedidosComponent } from './template-pedidos.component';

describe('TemplatePedidosComponent', () => {
  let component: TemplatePedidosComponent;
  let fixture: ComponentFixture<TemplatePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatePedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
