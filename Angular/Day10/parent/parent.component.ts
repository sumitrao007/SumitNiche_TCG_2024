import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string="Send data from Parent...";

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }
  dateValue:any;

  @Input() appData:any;


  constructor() { }

  ngOnInit(): void {
  }

  onSend(myvalue:any){
      this.dateValue=myvalue;
  }

}
