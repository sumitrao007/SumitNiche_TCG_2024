import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
  res:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){
    // this.result=num1+num2;

    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;


  }

  onChange(myvalue:string){
    console.log("Change event Occur...");

    if(myvalue.length>5){
      alert("Plz Enter charcter below 5 ...")
    }else{
      alert("Thank You Visit Again...")
    }

  }

  onKeyUp(){
    console.log("Key Up Event Occur...")
  }

  onKeyDown(){
    console.log("Key Down Event Occur...")
  }

  onKeyFiltering(){
    console.log("Enter key Pressed...")
  }

}
