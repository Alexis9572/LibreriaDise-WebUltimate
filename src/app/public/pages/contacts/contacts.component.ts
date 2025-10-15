import { Component, OnInit } from '@angular/core';
import { LoadStateEnum } from '../../../core/utils/load-enums';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  frmLoadSt = LoadStateEnum.None;
  loadStateEnum = LoadStateEnum;
  shared = "hola";
  constructor(private msgService: MessageService){}

  public ngOnInit(): void {
    //this.shared = this.msgService.getMsg();
  }
  save(name: string, lastName: string) {
    this.frmLoadSt = LoadStateEnum.Loading;

    // envio al servido
    setTimeout(() => {
      // guargador correcto
      alert('Se guardo');
      this.frmLoadSt = LoadStateEnum.Success;
    }, 4000);
  }
}
