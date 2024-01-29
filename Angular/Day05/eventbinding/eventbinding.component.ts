import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  isclick:boolean=true;
  isDefault:boolean=true;
  isError:boolean=false;
  jsonObj={
    'imgClass':this.isDefault,
    'imgBorder':this.isError
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.isclick){
      console.log("Click Event Occur...");
      this.isclick=false;
    }
    
  }

  onImage(){
    this.isError=true;
    console.log("click event occur on image");
    this.jsonObj.imgBorder=this.isError;
  }

}
