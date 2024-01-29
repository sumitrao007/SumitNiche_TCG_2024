import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string='success';
  rating:number=2;
  isError:boolean=true;
  isSpecial:boolean=true;

  jsonObj={
    'success':!this.isError,
    'danger' : this.isError,
    'special':this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
