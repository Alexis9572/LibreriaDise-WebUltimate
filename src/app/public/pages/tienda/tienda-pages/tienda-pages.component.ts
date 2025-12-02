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

  productoResponse: ProductoResponse[] = [];
  
  // 🔥 Agregado (no elimina nada)
  productoFiltrado: ProductoResponse[] = [];
  busqueda: string = "";

  constructor(
    private _tiendaService: TiendaServiceService,
    private _carritoService: CarritoComprasService,
  ){}

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this._tiendaService.getAll().subscribe({
      next: (data: ProductoResponse[]) => {
        this.productoResponse = data;

        // 🔥 Inicializamos los filtrados con la misma lista
        this.productoFiltrado = data;
      },
      error: () => {},
      complete: () => {}
    });
  }

  // 🔥 FILTRAR (no se elimina nada)
  filtrarProductos() {
    const texto = this.busqueda.toLowerCase().trim();

    this.productoFiltrado = this.productoResponse.filter(prod =>
      prod.nombre.toLowerCase().includes(texto) ||
      prod.descripcion.toLowerCase().includes(texto)
    );
  }

  addProducto(prod: ProductoResponse, event: any) {
    this._carritoService.addProducto(prod);
      const btn = event.target;
  btn.classList.add('btn-bounce');

  setTimeout(() => {
    btn.classList.remove('btn-bounce');
  }, 400);
}
  }

