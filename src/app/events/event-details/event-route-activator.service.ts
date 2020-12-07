import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';


@Injectable({
  providedIn: 'root'
})
export class EventRouteActivator implements CanActivate {

  constructor(private eventService: EventService, private router:Router) {
    
   }
 //implementation 
  canActivate(route: ActivatedRouteSnapshot) {
   //get url param
    let id :number = route.params['id'];
    //call service and see if an event with this id exists
    const eventExists = this.eventService.doesEventExist(id);
    if(!eventExists)
    {
      this.router.navigate(['/404']);
    } 
    return eventExists;
  } 
}
