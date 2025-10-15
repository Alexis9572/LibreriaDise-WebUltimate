import { Component, OnInit } from '@angular/core';
import { CarritoItem } from '../../../models/carrito';
import { CarritoComprasService } from '../../../services/carrito-compras.service';

@Component({
  selector: 'app-detalle-envio-component',
  templateUrl: './detalle-envio-component.component.html',
  styleUrl: './detalle-envio-component.component.scss'
})
export class DetalleEnvioComponentComponent implements OnInit {
  carrito: CarritoItem[] = [];
  total:number=0;
  constructor(
    private carritoSrv: CarritoComprasService
  ){}

  ngOnInit(): void {
    this.actualizarTotal();
    this.carritoSrv.listarCarrito().subscribe({
      
      next: (data) => 
        this.carrito = data,
         

    });
  }
  actualizarTotal():void  {
   this.total= this.carritoSrv.sumarPrecios();
  }

  eliminarProducto(item: CarritoItem): void {
    this.carritoSrv.removeProducto(item.producto.id);
  }

  cambiarCantidad(item: CarritoItem, cantidad: number): void {
    this.carritoSrv.editCantidad(item.producto.id, cantidad);
  }

  agregar1(item: CarritoItem): void {
    this.carritoSrv.editCantidad(item.producto.id, ++item.cantidad);
  }

  quitar1(item: CarritoItem): void {
    if(item.cantidad >= 2) {
      this.carritoSrv.editCantidad(item.producto.id, --item.cantidad);
    }
  }

}
