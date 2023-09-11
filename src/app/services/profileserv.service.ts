import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Profileserv {

  private dataSource = new Subject<any>();
  data$ = this.dataSource.asObservable();

  constructor() { }

  sendData(data:any) {
    this.dataSource.next(data);
  }
  
}
