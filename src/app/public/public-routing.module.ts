import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { TiendaPagesComponent } from './pages/tienda/tienda-pages/tienda-pages.component';
import { TemplateComponent } from '../private/pages/template/template.component';
import { TemplateFooterComponent } from '../private/pages/template-footer/template-footer.component';
import { TemplateSidebarComponent } from '../private/pages/template-sidebar/template-sidebar.component';
import { TemplateHeaderComponent } from '../private/pages/template-header/template-header.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { PagBienvenidoComponent } from './pages/widget/pag-bienvenido/pag-bienvenido.component';
import { DetalleEnvioComponentComponent } from './pages/detalle-envio/detalle-envio-component/detalle-envio-component.component';
import { TemplateProductosComponent } from '../private/pages/template-productos/template-productos.component';
import { TemplatePedidosComponent } from '../private/pages/template-pedidos/template-pedidos.component';
import { RegisterUserComponentComponent } from '../auth/pages/register-user-component/register-user-component.component';
import { AcercaPageComponent } from './pages/acerca/acerca-page/acerca-page.component';
import { AyudaPageComponent } from './pages/ayuda/ayuda-page/ayuda-page.component';
import { CompraComponentComponent } from './pages/compra-component/compra-component.component';
import { PaginaPedidoListoComponent } from './pages/pagina-pedido-listo/pagina-pedido-listo.component';
import { authGuard } from '../guards/auth.guard';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'contactenos', component: ContactsComponent},
            { 
                path: 'carrito', component: CarritoComponent,
                canActivate:[authGuard]

            },
            { path: 'dasboard', component:  TemplateComponent},
            { path: 'dasboard/devoluciones', component: TemplateSidebarComponent},
            { path: 'dasboard/productos', component: TemplateProductosComponent},
             { path: 'dasboard/pedidos', component: TemplatePedidosComponent},
            { path: 'tienda', component: TiendaPagesComponent},
            { path: 'login', component: LoginComponent},
            { path: 'detalle-envio', component: DetalleEnvioComponentComponent},
            { path: 'register-user', component:RegisterUserComponentComponent},
            { 
                path: 'perfil', component:PagBienvenidoComponent,
                canActivate:[authGuard]

            },
            { path: 'contacto', component:ContactsComponent},
            { path: 'acerca', component: AcercaPageComponent }, 
            { path: 'ayuda', component: AyudaPageComponent },
            { path: 'comprar', component: CompraComponentComponent },
            { path: 'pedido-listo', component: PaginaPedidoListoComponent },
            { path: '**', redirectTo: 'home' }
            
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
