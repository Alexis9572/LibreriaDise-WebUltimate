import { Component, OnInit } from '@angular/core';
import { DevolucionesService } from '../../../services/devolocione/devoluciones.service';
import { VwDevolucione } from '../../../public/models/vwDevoluciones.model';

@Component({
  selector: 'app-template-sidebar',
  templateUrl: './template-sidebar.component.html',
  styleUrl: './template-sidebar.component.scss'
})
export class TemplateSidebarComponent implements OnInit {
  devolucionResponse:VwDevolucione[]=[]
  constructor(
    private _devolucionService:DevolucionesService
  )
  {

  }
  ngOnInit(): void {
    this.listarDevoluciones()
  }
  listarDevoluciones()
  {
    this._devolucionService.getAll().subscribe(
      {
        next:(data:VwDevolucione[])=>{  this.devolucionResponse =data , console.log(data)},
        complete:()=>{},
        error:(error)=>{}
      }
    )
  }
}
