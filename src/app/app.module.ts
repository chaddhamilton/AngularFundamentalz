import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { TestService } from './test.service';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './events/nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes} from './routes';
import { CreateEventsComponent } from './events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator} from './events/event-details/event-route-activator.service'
import { EventsListResolver } from './shared/events-list-resolver.service';
import { ProfileComponent } from './user/profile.component'; 
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventsComponent,
    Error404Component,
    ProfileComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    TestService, 
    EventRouteActivator,
    {
      provide:'canDeactivateCreateEvent',  useValue:checkDirtyState 
    },
    EventsListResolver
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {

 }

 //For checking dirty state
export function checkDirtyState(component: CreateEventsComponent) {
{
 return (confirm("Are you sure you want to cancel and lose your changes?"));
}
}
