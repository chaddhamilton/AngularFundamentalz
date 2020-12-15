import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Component({
  templateUrl:'profile.component.html',
  styles:[
    ` 
    .error { border:3px solid red;}
    `
  ]
}) 

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  
  constructor(private authUserService:AuthService, private router:Router){
   
  }
   
  ngOnInit(): void {
  if(!this.authUserService.appUser){
    this.cancel();
  }
    
    let firstName = new FormControl(this.authUserService.appUser.firstName, Validators.required);
    let lastName = new FormControl(this.authUserService.appUser.lastName, Validators.required);
    this.profileForm  = new FormGroup(
      {firstName:firstName, 
      lastName:lastName
      }
    )
    
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authUserService.updateCurrentUser(formValues);
      this.router.navigate(['events']);
    }
  }

  cancel(){
    this.router.navigate(['events']);
  }
}