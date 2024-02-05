import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core java','dot net','Node js','Mongo Db','Sql','Express Js','Angular','AWS','Docker'];

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

selected:string='';
  constructor() { }

  ngOnInit(): void {

  }


  onMouseOver(item:any){
    console.log("On Mouse Over Event Occur...")
    this.selected=item.name;

  }

  onMouseOut(){
    this.selected='';
  }

  onGetMore(){
    this.arrproduct=[
      {
        name:'Mototrolla',
        price:35000,
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
      },
      {
        name:'Samsung',
        price:15000,
        qty:1
      },
      {
        name:'Nokia',
        price:15000,
        qty:1
      }
  ];
  }

  uniqueRecord(index:any,item:any){
    return index;
  }

}
