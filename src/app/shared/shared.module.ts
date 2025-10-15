import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingWidgetComponent } from './ui/widgets/loading-widget/loading-widget.component';



@NgModule({
  declarations: [
    LoadingWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingWidgetComponent
  ]
})
export class SharedModule { }
