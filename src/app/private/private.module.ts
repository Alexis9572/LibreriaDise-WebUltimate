import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PrivateRoutingModule } from './private-routing.module';
import { TemplateComponent } from './pages/template/template.component';
import { TemplateFooterComponent } from './pages/template-footer/template-footer.component';
import { TemplateHeaderComponent } from './pages/template-header/template-header.component';
import { TemplateSidebarComponent } from './pages/template-sidebar/template-sidebar.component';
import { TemplateProductosComponent } from './pages/template-productos/template-productos.component';
import { TemplatePedidosComponent } from './pages/template-pedidos/template-pedidos.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    LayoutComponent,
    TemplateComponent,
    TemplateFooterComponent,
    TemplateHeaderComponent,
    TemplateSidebarComponent,
    TemplateProductosComponent,
    TemplatePedidosComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
