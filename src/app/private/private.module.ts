import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { TemplateSidebarComponent } from './pages/template-sidebar/template-sidebar.component';
import { TemplateHeaderComponent } from './pages/template-header/template-header.component';
import { TemplateFooterComponent } from './pages/template-footer/template-footer.component';
import { TemplateComponent } from './pages/template/template.component';
import { TemplateProductosComponent } from './pages/template-productos/template-productos.component';
import { TemplatePedidosComponent } from './pages/template-pedidos/template-pedidos.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AdminPanelComponent,
    TemplateSidebarComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    TemplateComponent,
    TemplateProductosComponent,
    TemplatePedidosComponent,
    AgregarProductoComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class PrivateModule { }
