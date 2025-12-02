import { Component, OnInit } from '@angular/core';
import { ProductoResponse } from '../../../models/producto/productoResponse.model';
import { TiendaServiceService } from '../../../services/tienda/tienda-service.service';

@Component({
  selector: 'app-template-productos',
  templateUrl: './template-productos.component.html',
  styleUrl: './template-productos.component.scss'
})
export class TemplateProductosComponent implements OnInit {

  productoResponse: ProductoResponse[] = [];
  meny: any[] = [];

  constructor(
    private _prudctoService: TiendaServiceService
  ){}

  ngOnInit(): void {
    this.listarProducto();
    this.rellenarMenu();
  }

  listarProducto(){
    this._prudctoService.getAll().subscribe({
      next: (data: ProductoResponse[]) => { this.productoResponse = data },
      error: (error) => { alert(error) }
    });
  }

  rellenarMenu() {
    let idRol = sessionStorage.getItem("idRol");

    switch (idRol) {

      case "1":
        this.meny = [
          {
            name: "Administracion",
            target: "TargetMantenimiento",
            subMenu: [
              { name:"Roles", url:"mantenimiento/rol", icon:"fas fa-card" },
              { name:"Empleados", url:"mantenimiento/empleado", icon:"fas fa-card" },
              { name:"Usuarios", url:"mantenimiento/usuario", icon:"fas fa-users" }
            ]
          },
          {
            name:"Venta",
            target:"TargetVenta",
            subMenu:[
              {name:"Clientes",url:"mantenimiento/cliente", icon:"fas fa-users"},
              {name:"Pedidos",url:"/dasboard/pedidos", icon:"fa-solid fa-warehouse"} 
            ]
          },
          {
            name:"Produccion",
            target:"TargetProduccion",
            subMenu:[
              {name:"Productos",url:"/dasboard/productos", icon:"fa-solid fa-warehouse"},
              {name:"Devoluciones",url:"/dasboard/devoluciones", icon:"fas fa-plus"},
              {name:"Modelos",url:"mantenimiento/modelo", icon:"fa-solid fa-bag-shopping"},
              {name:"Proveedores",url:"mantenimiento/proveedor", icon:"fas fa-users"}
            ]
          },
          {
            name:"Materiales",
            target:"TargetMateriales",
            subMenu:[
              {name:"Salida Material",url:"mantenimiento/salidaMaterial", icon:"fa-solid fa-warehouse"},
              {name:"Materiales",url:"mantenimiento/material", icon:"fa-solid fa-box"},
              {name:"Ingreso Material",url:"mantenimiento/materialIngreso", icon:"fa-solid fa-plus"}
            ]
          }
        ];
      break;

      case "1002":
        this.meny = [
          {
            name:"Pedidos",
            target:"TargetPedidos",
            subMenu:[
              {name:"Ordenes",url:"/dasboard/pedidos", icon:"fa-solid fa-warehouse"} 
            ]
          },
          {
            name:"Productos",
            target:"TargetProductos",
            subMenu:[
              {name:"Productos",url:"/dasboard/productos", icon:"fa-solid fa-warehouse"},
            ]
          }
        ];
      break;
    }
  }
}
