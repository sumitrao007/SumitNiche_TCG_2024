import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  person:Person=<Person>{};
  name:string='';
  constructor() { }

  ngOnInit(): void {
    
  }

  onSend(){
    console.log(this.person)
  }

}
