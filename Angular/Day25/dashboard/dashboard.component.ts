import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:string|null='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user=sessionStorage.getItem("username");
  }

  onLogout(){
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

}
