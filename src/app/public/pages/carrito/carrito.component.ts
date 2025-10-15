import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { CarritoItem } from '../../models/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
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
    this.actualizarTotal();
  }

  cambiarCantidad(item: CarritoItem, cantidad: number): void {
    this.carritoSrv.editCantidad(item.producto.id, cantidad);
  }

  agregar1(item: CarritoItem): void {
    this.carritoSrv.editCantidad(item.producto.id, ++item.cantidad);
    this.actualizarTotal(); 
  }

  quitar1(item: CarritoItem): void {
    if(item.cantidad >= 2) {
      this.carritoSrv.editCantidad(item.producto.id, --item.cantidad);
      this.actualizarTotal();
    }
  }
  

}
