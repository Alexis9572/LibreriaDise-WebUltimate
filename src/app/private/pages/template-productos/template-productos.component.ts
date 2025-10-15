import { Component, OnInit } from '@angular/core';
import { ProductoResponse } from '../../../models/producto/productoResponse.model';
import { TiendaServiceService } from '../../../services/tienda/tienda-service.service';

@Component({
  selector: 'app-template-productos',
  templateUrl: './template-productos.component.html',
  styleUrl: './template-productos.component.scss'
})
export class TemplateProductosComponent implements OnInit {
  productoResponse:ProductoResponse[]=[]

  constructor(
    private _prudctoService:TiendaServiceService
  ){}

  ngOnInit(): void {
    this.listarProducto()
  }
  listarProducto()
  {
    this._prudctoService.getAll().subscribe(
      {
        next:(data:ProductoResponse[])=>{ this.productoResponse=data},
        complete:()=>{},
        error:(error)=>{alert(error)}
      }
    )
  }

}
