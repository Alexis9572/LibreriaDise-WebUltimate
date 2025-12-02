import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { LoadStateEnum } from '../../../core/utils/load-enums';
import { MessageService } from '../../services/message.service';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { Producto } from '../../models/producto';
import { TiendaServiceService } from '../../../services/tienda/tienda-service.service';
import { ProductoResponse } from '../../../models/producto/productoResponse.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  categoriaFiltro: string = '';
  productoResponse: ProductoResponse[] = [];
  pokemons: any[] = [];
  pkmnLoadSt: LoadStateEnum = LoadStateEnum.None;
  loadStateEnum = LoadStateEnum;
  shared = "mundo";

  constructor(
    private pokeService: PokeapiService,
    private _tiendaService: TiendaServiceService,
    private msgService: MessageService,
    private carritoSrv: CarritoComprasService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.categoriaFiltro = params['categoria'] || '';
      this.listarProductos();
    });

    this.loadPkmns();

    this.msgService.getMsg().subscribe({
      next: (data) => this.shared = data
    });
  }

addProducto(prod: ProductoResponse, event?: any) {
  this.carritoSrv.addProducto(prod);

  // Animación del carrito
  if (event) {
    const btn = event.currentTarget;
    btn.classList.add('clicked');
    setTimeout(() => {
      btn.classList.remove('clicked');
    }, 600); // duración de la animación
  }
}


listarProductos() {
  this._tiendaService.getAll().subscribe({
    next: (data: ProductoResponse[]) => {

      if (this.categoriaFiltro) {
        this.productoResponse = data.filter(p =>
          p.categoria?.toUpperCase() === this.categoriaFiltro.toUpperCase()
        );
      } else {
        this.productoResponse = data;
      }

      // ===== Scroll automático hacia productos destacados =====
      if (this.categoriaFiltro) {
        const element = document.getElementById('productosDestacados');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

    },
    error: (err) => alert(err)
  });
}


  changeMessage(msg: string) {
    this.msgService.setMsg(msg);
  }

  loadPkmns() {
    this.pkmnLoadSt = LoadStateEnum.Loading;
    this.pokeService.listPokemons().then(
      (data) => {
        this.pokemons = data;
        this.pkmnLoadSt = LoadStateEnum.Success;
      }
    ).catch(
      (err) => {
        this.pkmnLoadSt = LoadStateEnum.Error;
        console.error(err);
      } 
    );
  }

}
