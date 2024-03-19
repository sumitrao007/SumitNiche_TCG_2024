import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onClick(username:string,password:string){

    let obj={
      username:username,
      password:password
    }

    this.service.loginUser(obj)
    .subscribe((response:any)=>{
      console.log(response);

        if(response.msg==="Valid User"){
            // navigate to dashboard

            sessionStorage.setItem("username",response.user.username);

          this.router.navigate(["/dashboard"]);

        }

    })


  }

}
