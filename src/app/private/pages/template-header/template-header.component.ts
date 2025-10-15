import { Component, OnInit } from '@angular/core';
import { ProductoResponse } from '../../../models/producto/productoResponse.model';
import { TiendaServiceService } from '../../../services/tienda/tienda-service.service';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrl: './template-header.component.scss'
})
export class TemplateHeaderComponent implements OnInit {
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
