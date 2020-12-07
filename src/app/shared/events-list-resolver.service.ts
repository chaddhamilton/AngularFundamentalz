import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { from } from 'rxjs';
import { EventService } from './event.service';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventsListResolver implements Resolve<any> {

  constructor(private eventsService:EventService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventsService.getEvents().
    pipe(
    map(events => events) //return observalble
    )};
}
