import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-bienvenido',
  templateUrl: './pag-bienvenido.component.html',
  styleUrl: './pag-bienvenido.component.scss'
})
export class PagBienvenidoComponent {
 usuario: string ="";
  constructor(

    private router:Router
  )
  {
    this.usuario = sessionStorage.getItem("usuario")|| "";
  }
  cerrarSesion(){
    
    sessionStorage.clear();
    window.location.reload();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/home']); // o la ruta que quieras recargar
          });;//redireccion a home
  }
}



