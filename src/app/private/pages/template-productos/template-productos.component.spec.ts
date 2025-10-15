import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProductosComponent } from './template-productos.component';

describe('TemplateProductosComponent', () => {
  let component: TemplateProductosComponent;
  let fixture: ComponentFixture<TemplateProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
