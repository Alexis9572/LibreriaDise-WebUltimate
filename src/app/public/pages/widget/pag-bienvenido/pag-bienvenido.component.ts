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
  cerrarSesion() {
  sessionStorage.clear();

  this.router.navigate(['/']).then(() => {
    // Si quieres forzar recarga, usa esto, pero 100ms después
    setTimeout(() => {
      window.location.reload();
    }, 100);
  });
}

}



