import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../shared/models/user.model';
   
@Injectable({
  providedIn: 'root'
})
 
export class AuthService {
appUser:IUser

loginUser (userName:string, password :string) :IUser
  {
    //create a new instance
    this.appUser= {
    id:11110,
    userName:userName,
    password: password,
    firstName:'Dirk',
    lastName:'Diggler',
    }

    return this.appUser;
  }
 
  isAuthenticated(){
    return !!this.appUser;
  }

  constructor() { }

updateCurrentUser(formValues)
{
   this.appUser.firstName = formValues.firstName;
   this.appUser.lastName = formValues.lastName;
   alert('Changes Saved!')
}

}
