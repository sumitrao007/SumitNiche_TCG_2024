import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {

  strmsg:string='Hello all welcome to Angular module By sumit raOkhande';

  num2:number=-452.78956324557;
  mydate=new Date();
  dddate:string='dd-MM-yyyy';
  constructor() { }

  ngOnInit(): void {
  }

}
