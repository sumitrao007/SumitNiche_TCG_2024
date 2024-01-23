import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  imgUrl:string='../../assets/bg12.jpg';

  num:number=2;
  num1:string='2';
  

  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    return this.name;
  }

}
