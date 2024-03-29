import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifydata:string='';
  constructor(private Servicenotify:NotificationService) { }

  ngOnInit(): void {
    this.GetNotificationData();
  }

  GetNotificationData(){
      this.Servicenotify.notification
      .subscribe((data)=>{
        //console.log(data)
        this.notifydata=data;
      })
  }

}
