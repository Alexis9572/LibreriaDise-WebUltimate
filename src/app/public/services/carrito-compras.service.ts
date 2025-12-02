import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { CarritoItem } from '../models/carrito';
import { ProductoResponse } from '../../models/producto/productoResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  listaProductos: CarritoItem[] = [];
  listaProductosSubject: BehaviorSubject< CarritoItem[]> 
    = new BehaviorSubject< CarritoItem[]>([]);
  
  constructor() {
    const carritoJson = localStorage.getItem('carrito-compras');
    if (carritoJson !== null) {
      const carrito = JSON.parse(carritoJson);
      this.listaProductos = carrito;
      this.listaProductosSubject.next(this.listaProductos);
    }
  }

  addProducto(producto: ProductoResponse): void {
    let item = this.listaProductos.find(i => i.producto.id === producto.id);
    if(item) {
      item.cantidad++;
    } else {
      this.listaProductos.push({ producto: producto, cantidad: 1 });
    }
    this.listaProductosSubject.next(this.listaProductos);
    this.actualizarContador(); // <- actualizar inmediatamente
    localStorage.setItem('carrito-compras', JSON.stringify(this.listaProductos));
  }

  removeProducto(id: number): void {
    this.listaProductos = this.listaProductos.filter(i => i.producto.id !== id);
    this.listaProductosSubject.next(this.listaProductos);
    this.actualizarContador(); // <- actualizar inmediatamente
    localStorage.setItem('carrito-compras', JSON.stringify(this.listaProductos));
  }
  sumarPrecios():number{
    const prodct=localStorage.getItem('carrito-compras');
    if(!prodct){
      return 0;
    }
    else{
      let productos:any[]=JSON.parse(prodct);
      return productos.reduce((acc,prod)=>acc+(prod.producto.precio*prod.cantidad),0);
    }
  }

  editCantidad(id: number, cantidad: number): void {
    const item = this.listaProductos.find(i => i.producto.id === id);
    if(item) {
      item.cantidad = cantidad;
      this.listaProductosSubject.next(this.listaProductos);
      this.actualizarContador(); // <- actualizar inmediatamente
      localStorage.setItem('carrito-compras', JSON.stringify(this.listaProductos));
    }
  }
  
  listarCarrito(): Observable<CarritoItem[]> {
    return this.listaProductosSubject.asObservable();
  }
      // Contador de productos totales
      private contadorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
      contador$ = this.contadorSubject.asObservable();

      // Función para actualizar el contador
      private actualizarContador() {
        const total = this.listaProductos.reduce((acc, item) => acc + item.cantidad, 0);
        this.contadorSubject.next(total);
      }
  // ===========================
  // VACÍAR CARRITO
  // ===========================
  vaciarCarrito(): void {
    this.listaProductos = [];
    this.listaProductosSubject.next(this.listaProductos); // Notificar cambios
    this.actualizarContador(); // Actualizar contador de productos
    localStorage.setItem('carrito-compras', JSON.stringify(this.listaProductos));
  }


}
