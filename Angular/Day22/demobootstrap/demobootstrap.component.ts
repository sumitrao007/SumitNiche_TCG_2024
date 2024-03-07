import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

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

}
