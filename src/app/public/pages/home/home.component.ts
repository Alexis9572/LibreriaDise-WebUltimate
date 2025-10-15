import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { LoadStateEnum } from '../../../core/utils/load-enums';
import { MessageService } from '../../services/message.service';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { Producto } from '../../models/producto';
import { TiendaServiceService } from '../../../services/tienda/tienda-service.service';
import { ProductoResponse } from '../../../models/producto/productoResponse.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  pkmnLoadSt: LoadStateEnum = LoadStateEnum.None;
  productoResponse:ProductoResponse[]  =[]
  loadStateEnum = LoadStateEnum;
  shared = "mundo";
  productos: Producto[] = [
    {nombre: "perrito", precio: 120.5, id: 1},
    {nombre: "gatito", precio: 12.5, id: 2},
    {nombre: "lorito", precio: 2.5, id: 3},
    {nombre: "cuy", precio: 30.5, id: 4},
    {nombre: "capibara", precio: 50.5, id: 5},
    {nombre: "marmota", precio: 134.5, id: 6},
    {nombre: "oso", precio: 45.5, id: 7},
    {nombre: "hamster", precio: 20.5, id: 8},
    {nombre: "fenix", precio: 1002.5, id: 9},
  ]
  constructor(
    private pokeService: PokeapiService,
    private _tiendaService:TiendaServiceService,
    private msgService: MessageService,
    private carritoSrv: CarritoComprasService,
  ){}

  ngOnInit(): void {
   
    this.listarProductos()
    this.loadPkmns();
    //this.shared = this.msgService.getMsg();
    this.msgService.getMsg().subscribe({
      next: (data) => this.shared = data
    });
    
  }

  addProducto(prod: ProductoResponse) {
    debugger
    this.carritoSrv.addProducto(prod);
  }
 listarProductos( )
  {
    this._tiendaService.getAll().subscribe(
      {
        next:(data:ProductoResponse[])=>{this.productoResponse=data},
        error:(err)=>{alert(err)},
        complete:()=>{}
      }
    )
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
