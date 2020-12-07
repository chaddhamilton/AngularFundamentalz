import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
 // selector: 'events-list',
  // templateUrl: './events-list.component.html'
  template: `
  <div>
  <h1>Upcoming angular events</h1>
  <hr>  
  <div class="row" >
    <div class="col-md-5" *ngFor="let event of curEvents">
      <event-thumbnail  [event]='event' #thumbNail ></event-thumbnail>
    </div>
    </div>
  </div>

   `
})
export class EventsListComponent implements OnInit {
  
  var1:string = "Heyee";
  handleBt1 = function(e){
    alert(e);
  }
  curEvents: any;
  
  constructor(private eventServ: EventService, private route :ActivatedRoute) {
     
   }

  ngOnInit(): void {
  //GET OUR EVENTS
     this.curEvents = this.route.snapshot.data['allEvents']; //see routes for resolver info
  //this.curEvents = this.eventServ.getEvents();
 
  }

  
  title="hey";

}
