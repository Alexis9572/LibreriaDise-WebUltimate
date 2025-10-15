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
    let item = this.listaProductos
      .filter( i => i.producto.id == producto.id)[0];
    if(item) {
      item.cantidad++;
    } else {
      item = {
        producto: producto,
        cantidad: 1
      }
      this.listaProductos.push(item);
    }
    this.listaProductosSubject.next(this.listaProductos);
    // guardar en el localstorage
    const listaJson = JSON.stringify(this.listaProductos);
    localStorage.setItem('carrito-compras', listaJson);
  }

  removeProducto(id: number): void {
    for(let index in this.listaProductos ) {
      if (this.listaProductos[index].producto.id === id) {
        //eliminarlo
        this.listaProductos.splice(+index, 1);
        // guardar en el localstorage
        const listaJson = JSON.stringify(this.listaProductos);
        localStorage.setItem('carrito-compras', listaJson);
        break;
      }
    }
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
    let item = this.listaProductos
      .filter( i => i.producto.id == id)[0];
    if(item) {
      item.cantidad = cantidad;
    }
    this.listaProductosSubject.next(this.listaProductos);
    // guardar en el localstorage
    const listaJson = JSON.stringify(this.listaProductos);
    localStorage.setItem('carrito-compras', listaJson);
  }

  listarCarrito(): Observable<CarritoItem[]> {
    return this.listaProductosSubject.asObservable();
  }
}
