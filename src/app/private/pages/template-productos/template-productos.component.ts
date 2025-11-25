import { Component, OnInit } from '@angular/core';
import { ProductoResponse } from '../../../models/producto/productoResponse.model';
import { TiendaServiceService } from '../../../services/tienda/tienda-service.service';
import { VwDevolucione } from '../../../public/models/vwDevoluciones.model';
import { DevolucionesService } from '../../../services/devolocione/devoluciones.service';

@Component({
  selector: 'app-template-productos',
  templateUrl: './template-productos.component.html',
  styleUrl: './template-productos.component.scss'
})
export class TemplateProductosComponent implements OnInit {
  productoResponse:ProductoResponse[]=[]
  meny: any[] = [];
  constructor(
    private _prudctoService:TiendaServiceService
  ){}

  ngOnInit(): void {
    this.listarProducto()
    this.rellenarMenu()
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
rellenarMenu() {
    
    let idRol = sessionStorage.getItem("idRol");

    switch (idRol) {

      // ========= ADMINISTRADOR COMPLETO =============
      case "1":
        this.meny = [
          {
            name: "Administracion",
            target: "TargetMantenimiento",
            subMenu: [
              { name:"Roles", url:"mantenimiento/rol", incon:"fas fa-card" },
              { name:"Empleados", url:"mantenimiento/empleado", incon:"fas fa-card" },
              { name:"Usuarios", url:"mantenimiento/usuario", incon:"fas fa-users" }
            ]
          },
          {
            name:"Venta",
            target:"TargetVenta",
            incon:"fas fa-users",
            subMenu:[
              {name:"Clientes",url:"mantenimiento/cliente", incon:"fas fa-users"},
              {name:"Pedidos",url:"/dasboard/pedidos", incon:"fa-solid fa-warehouse"} 
            ]
          },
          {
            name:"Produccion",
            target:"TargetProduccion",
            incon:"fas fa-edit",
            subMenu:[
              {name:"Productos",url:"/dasboard/productos", incon:"fa-solid fa-warehouse"},
              {name:"Devoluciones",url:"/dasboard/devoluciones", incon:"fas fa-plus"},
              {name:"Modelos",url:"mantenimiento/modelo", incon:"fa-solid fa-bag-shopping"},
              {name:"Proveedores",url:"mantenimiento/proveedor", incon:"fas fa-users"}
            ]
          },
          {
            name:"Materiales",
            target:"TargetMateriales",
            incon:"fas fa-box",
            subMenu:[
              {name:"Salida Material",url:"mantenimiento/salidaMaterial", incon:"fa-solid fa-warehouse"},
              {name:"Materiales",url:"mantenimiento/material", incon:"fa-solid fa-box"},
              {name:"Ingreso Material",url:"mantenimiento/materialIngreso", incon:"fa-solid fa-plus"}
            ]
          }
        ];
      break;


      // ========= ROL 1002 → SOLO PRODUCTOS Y PEDIDOS ===========
      case "1002":
        this.meny = [
          {
            name:"Pedidos",
            target:"TargetPedidos",
            subMenu:[
              {name:"Ordenes",url:"/dasboard/pedidos", incon:"fa-solid fa-warehouse"} 
            ]
          },
          {
            name:"Productos",
            target:"TargetProductos",
            subMenu:[
               {name:"Productos",url:"/dasboard/productos", incon:"fa-solid fa-warehouse"},
            ]
          }
        ];
      break;
    }
  }

}
