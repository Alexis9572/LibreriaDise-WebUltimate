import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagBienvenidoComponent } from './pag-bienvenido.component';

describe('PagBienvenidoComponent', () => {
  let component: PagBienvenidoComponent;
  let fixture: ComponentFixture<PagBienvenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagBienvenidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagBienvenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
