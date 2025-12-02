import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PublicRoutingModule } from './public-routing.module';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PiePaginaComponent } from './pages/pie-pagina/pie-pagina.component';
import { HeaderComponent } from './pages/header/header.component';
import { DetalleEnvioComponentComponent } from './pages/detalle-envio/detalle-envio-component/detalle-envio-component.component';
import { AcercaPageComponent } from './pages/acerca/acerca-page/acerca-page.component';
import { AyudaPageComponent } from './pages/ayuda/ayuda-page/ayuda-page.component';
import { CompraComponentComponent } from './pages/compra-component/compra-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaPedidoListoComponent } from './pages/pagina-pedido-listo/pagina-pedido-listo.component';




@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ContactsComponent,
    CarritoComponent,
    PiePaginaComponent,
    HeaderComponent,
    
    DetalleEnvioComponentComponent,
    AcercaPageComponent,
    AyudaPageComponent,
    CompraComponentComponent,
    PaginaPedidoListoComponent
  ],
  imports: [
    CommonModule,
     CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
   
    SharedModule,
    FormsModule 
  ]
})
export class PublicModule { }
