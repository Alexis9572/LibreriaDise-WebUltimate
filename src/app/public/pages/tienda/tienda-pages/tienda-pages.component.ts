import { Component, OnInit } from '@angular/core';
import { TiendaServiceService } from '../../../../services/tienda/tienda-service.service';
import { ProductoResponse } from '../../../../models/producto/productoResponse.model';
import { CarritoComprasService } from '../../../services/carrito-compras.service';

@Component({
  selector: 'app-tienda-pages',
  templateUrl: './tienda-pages.component.html',
  styleUrl: './tienda-pages.component.scss'
})
export class TiendaPagesComponent implements OnInit {
 productoResponse:ProductoResponse[]  =[]
  constructor(
    private _tiendaService:TiendaServiceService,
    private _carritoService:CarritoComprasService, 
  )
  {

  }
  ngOnInit(): void {
    this.listarProductos()
  }
  listarProductos( )
  {
    this._tiendaService.getAll().subscribe(
      {
        next:(data:ProductoResponse[])=>{this.productoResponse=data},
        error:()=>{},
        complete:()=>{}
      }
    )
  }
  addProducto(prod:ProductoResponse)
  {
    this._carritoService.addProducto(prod);
  }
}
