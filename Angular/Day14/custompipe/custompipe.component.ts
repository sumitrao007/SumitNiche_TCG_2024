import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quam officiis ipsum facilis libero vero, eaque fuga qui voluptatum reprehenderit eius nam ducimus eveniet ullam veniam iste fugit voluptatibus mollitia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quam officiis ipsum facilis libero vero, eaque fuga qui voluptatum reprehenderit eius nam ducimus eveniet ullam veniam iste fugit voluptatibus mollitia!';
  constructor() { }

  ngOnInit(): void {
  }

}
