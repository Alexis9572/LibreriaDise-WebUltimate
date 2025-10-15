import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message = 'NADA DE NAADA';
  messageSbj: BehaviorSubject<string> = new BehaviorSubject<string>(this.message);
  
  constructor() {
  }

  getMsg() {
    return this.messageSbj.asObservable();
  }
  setMsg(msg: string) {
    this.message = msg;
    this.messageSbj.next(msg);
  }


}
