import { Component, OnInit } from '@angular/core';
import { CarritoItem } from '../../../models/carrito';
import { CarritoComprasService } from '../../../services/carrito-compras.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-envio-component',
  templateUrl: './detalle-envio-component.component.html',
  styleUrl: './detalle-envio-component.component.scss'
})
export class DetalleEnvioComponentComponent implements OnInit {
  carrito: CarritoItem[] = [];
  total:number=0;
constructor(
  private carritoSrv: CarritoComprasService,
  private router: Router
) {}


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
  // ===========================
// CANCELAR PEDIDO
// ===========================
cancelar(): void {
  this.carritoSrv.vaciarCarrito(); // Vacía el carrito en el servicio
  this.carrito = [];
  this.total = 0;
  this.router.navigate(['/tienda']); // Regresa a pantalla de inicio
}


}
