import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  students:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.GetAllRecord();
  }

  GetAllRecord(){
      this.service.getRecord()
      .subscribe((response:any)=>{
        // console.log(response);
        this.students=response
      });
  }

}
