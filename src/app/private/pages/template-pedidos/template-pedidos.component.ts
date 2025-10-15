import { Component, OnInit } from '@angular/core';
import { PedidoResponse } from '../../../public/models/pedido-response.model';
import { PedidoService } from '../../../services/pedido/pedido.service';



@Component({
  selector: 'app-template-pedidos',
  templateUrl: './template-pedidos.component.html',
  styleUrl: './template-pedidos.component.scss'
})
export class TemplatePedidosComponent implements OnInit {
  pedidoResponse:PedidoResponse[]=[]

  constructor(
    private _pedidoService:PedidoService
  ){}

  ngOnInit(): void {
    this.listarProducto()
  }
  listarProducto()
  {
    this._pedidoService.getAll().subscribe(
      {
        next:(data:PedidoResponse[])=>{ this.pedidoResponse=data},
        complete:()=>{},
        error:(error)=>{alert(error)}
      }
    )
  }

}
