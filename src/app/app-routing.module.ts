import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLoginGuard } from './auth/guards/is-login.guard';
import { isAdminGuard } from './auth/guards/is-admin.guard';
import { TiendaPagesComponent } from './public/pages/tienda/tienda-pages/tienda-pages.component';
import { AcercaPageComponent } from './public/pages/acerca/acerca-page/acerca-page.component';
import { AyudaPageComponent } from './public/pages/ayuda/ayuda-page/ayuda-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'tienda',
    component: TiendaPagesComponent
  },
  {
    canActivate: [isAdminGuard],
    path: 'admin',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  { path: 'acerca', component: AcercaPageComponent },
  { path: 'ayuda', component: AyudaPageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',   // Siempre sube al inicio al cambiar de ruta
      anchorScrolling: 'enabled'          // Permite usar #anclas si lo necesitas
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
