import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  students:any[]=[];
  id:any;
  name!:string;
  phoneNo!:string;
  createddate:string='';
  isHidden:boolean=true;

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

  onSend(myname:any,myphone:any){

    let obj={
      name:myname,
      phoneno:myphone,
      createddate:Date.now()
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
      this.GetAllRecord();
    })
  }

  onEdit(item:any){
    console.log(item);
    this.id=item.id;
    this.name=item.name;
    this.phoneNo=item.phoneno;
    this.createddate=item.createddate;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      name:this.name,
      phoneno:this.phoneNo,
      createddate:this.createddate
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
      this.GetAllRecord();
      this.isHidden=true;
    })

  }

  onDelete(id:any){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
      this.GetAllRecord();
    })
  }


}
