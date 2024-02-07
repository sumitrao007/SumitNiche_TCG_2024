import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childStrEvent=new EventEmitter();

   @Output() childArrObjEvent=new EventEmitter();

    strData:string='Data to be send from Child Component to Parent Component';

    arrproduct=[
      {
        name:'Mototrolla',
        price:30000,
        qty:1
      },
      {
        name:'OnePlus',
        price:45000,
        qty:1
      },
      {
        name:'Oppo',
        price:25000,
        qty:1
      },
      {
        name:'Realme',
        price:18000,
        qty:1
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
      this.childStrEvent.emit(this.strData);
      this.childArrObjEvent.emit(this.arrproduct);
  }

}
