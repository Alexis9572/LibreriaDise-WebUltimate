import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  
})
export class LayoutComponent implements OnInit {
  carrito: any[] = [];
  meny:any[]=[]
  cantidadCarrito = 0;



  constructor(private carritoSrv: CarritoComprasService){}
  ngOnInit(): void {
    this.carritoSrv.listarCarrito().subscribe({
      next: (data) => this.carrito = data
    });
    this.rellenarMenu()
  }
  rellenarMenu()
  {
    let rolID = sessionStorage.getItem("idRol");
    if(rolID==null)
      {
        this.meny =
        [
          {
            name:"Principal", target:"TargetPrincipal",
            subMenu:
            [
              {name:"Login",url:"/login", incon:"fa fa-fw fa-search text-dark mr-2"},   
              {name:"Carrito",url:"/perfil", incon:"fa fa-fw fa-user text-dark mr-3"},     
            ]         
          }              
        ]
      
      }
    switch(rolID )
    {

      case "1":
       
        this.meny =
        [
          {
            name:"Dasboard", target:"TargetAdministrador",
            subMenu:
            [
              {name:"Dasboard",url:"/dasboard", incon:"fa fa-fw fa-search text-dark mr-2"},
              
              {name:"Cuenta",url:"/perfil", incon:"fa fa-fw fa-user text-dark mr-3"},     
            ]         
          }              
        ]
        
      break;
      case "2":
        this.meny =
        [
          {
            name:"Cliente", target:"Cliente",
            subMenu:
            [
              {name:"Cuenta",url:"/perfil", incon:"fa fa-fw fa-user text-dark mr-3"},    
              {name:"Carrito",url:"/carrito", incon:"fa fa-fw fa-search text-dark mr-2"},     
            ]
                  
          }
                     
        ]
      break;
       
    }
  }
}
