import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../services/carrito-compras.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {

  carrito: any[] = [];
  cantidadCarrito = 0;
  meny: any[] = [];

  constructor(private carritoSrv: CarritoComprasService) {}

  ngOnInit(): void {
    // Cargar carrito
    this.carritoSrv.listarCarrito().subscribe({
      next: (data) => {
        this.carrito = data;
        this.cantidadCarrito = data.length;
      }
    });

    // Cargar menú
    this.rellenarMenu();
  }

  rellenarMenu() {

    let rolID = sessionStorage.getItem("idRol");

    // ====== MENÚ PARA PERSONA NO LOGUEADA ======
    if (rolID === null) {
      this.meny = [
        {
          name: "Principal",
          target: "TargetPrincipal",
          subMenu: [
            { name: "Login", url: "/login", incon: "fa fa-fw fa-search text-dark mr-2" },
            { name: "Carrito", url: "/carrito", incon: "fa fa-fw fa-shopping-cart text-dark mr-2" }
          ]
        }
      ];
      return;
    }

    // ===== ROLES LOGUEADOS ======
    switch (rolID) {

      // ===== ADMINISTRADOR =====
      case "1":
        this.meny = [
          {
            name: "Dashboard",
            target: "TargetAdministrador",
            subMenu: [
              { name: "Dashboard", url: "/dasboard", incon: "fa fa-fw fa-chart-line text-dark mr-2" },
              { name: "Cuenta", url: "/perfil", incon: "fa fa-fw fa-user text-dark mr-3" }
            ]
          }
        ];
      break;
      case "1002":
        this.meny = [
          {
            name: "Dashboard",
            target: "TargetAdministrador",
            subMenu: [
              { name: "Dashboard", url: "/dasboard", incon: "fa fa-fw fa-chart-line text-dark mr-2" },
              { name: "Cuenta", url: "/perfil", incon: "fa fa-fw fa-user text-dark mr-3" }
            ]
          }
        ];
      break;

      // ===== CLIENTE =====
      case "2":
        this.meny = [
          {
            name: "Cliente",
            target: "TargetCliente",
            subMenu: [
              { name: "Cuenta", url: "/perfil", incon: "fa fa-fw fa-user text-dark mr-3" },
              { name: "Carrito", url: "/carrito", incon: "fa fa-fw fa-shopping-cart text-dark mr-2" }
            ]
          }
        ];
      break;
    }
  }
}
