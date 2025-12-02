import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraComponentComponent } from './compra-component.component';

describe('CompraComponentComponent', () => {
  let component: CompraComponentComponent;
  let fixture: ComponentFixture<CompraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
