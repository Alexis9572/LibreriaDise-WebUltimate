import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { PedidoResponse } from '../../../public/models/pedido-response.model';

@Component({
  selector: 'app-template-footer',
  templateUrl: './template-footer.component.html',
  styleUrl: './template-footer.component.scss'
})
export class TemplateFooterComponent implements OnInit {
  pedidoResponse:PedidoResponse[]= []
  constructor(
    private _pedidoService:PedidoService

  )
  {

  }
  ngOnInit(): void {
    this.listarPedido()
  }
  listarPedido()
  {
      this._pedidoService.getAll().subscribe(
        {
          next:(data:PedidoResponse[])=>{ this.pedidoResponse=data, console.log(data)}, 
          error:()=>{},
          complete:()=>{}
        }
      )
  }
}
