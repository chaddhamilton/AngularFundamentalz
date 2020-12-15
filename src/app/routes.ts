import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventsComponent } from './events/create-events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './shared/events-list-resolver.service';
import { ProfileComponent } from './user/profile.component';
import { LoginComponent } from './user/login.component';
  
export const appRoutes:Routes = [
//  /events/create
{ path: 'events/new', component:CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent']},
//   /events
{ path:'events', component:EventsListComponent, resolve: {allEvents: EventsListResolver }},
//   /events/1
{ path: 'events/:id', component:EventDetailsComponent, canActivate: [EventRouteActivator]},
//LOGIN
{ path:'user/login', component:LoginComponent }, 
//PROFILE
{ path:'user/profile', component:ProfileComponent },
//  Not Found
{ path: '404', component:Error404Component},
//   default
{ path:'', redirectTo:'/events', pathMatch:'full' },



]