import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//Form vars
userName
password
 
  constructor(private authUserService:AuthService, private router:Router) { 

  }
  ngOnInit(): void {
  }
  
  doLogin(loginForm){
   this.authUserService.loginUser(loginForm.userName, loginForm.password)
   this.redir();
  }
  cancel(){
    this.redir();
  }
 redir(){
  this.router.navigate(['events']);
 }

}
