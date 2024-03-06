import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  notifyData:string='';
  constructor(private route:ActivatedRoute,
    private service:NotificationService) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
    this.GetNotificationData();
  }

  GetNotificationData(){
    this.service.notification
    .subscribe((data)=>{
        this.notifyData=data;
    })
  }

  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        console.log("Id-> "+param.get("id"));
        console.log("fname-> "+param.get("fname"));
        console.log("status-> "+param.get("status"));
      })
  }


  onSend(msg:string){
    this.service.sendMessage(msg);
  }

}
