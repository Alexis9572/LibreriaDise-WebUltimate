import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'panel', component: AdminPanelComponent},
            
           
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
