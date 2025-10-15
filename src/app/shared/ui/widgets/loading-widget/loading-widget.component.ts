import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-gears',
  templateUrl: './loading-widget.component.html',
  styleUrl: './loading-widget.component.scss'
})
export class LoadingWidgetComponent {
  @Input()
  message = "Cargando!!"
}
