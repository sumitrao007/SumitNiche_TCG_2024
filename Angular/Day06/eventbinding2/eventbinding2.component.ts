import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSend(myevent:any){
    console.log(myevent)
    console.log(myevent.target.value);
  }

  onSendData(myname:any){
    console.log(myname);
    console.log(myname.value);
    myname.style.background='green';
    myname.style.color='white';
  }

  onSendData1(myvalue:string){
    console.log(myvalue)
  }

}
