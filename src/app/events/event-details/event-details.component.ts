import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event : any;
  id :any;
  constructor(private eventService:EventService, private route:ActivatedRoute ) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.event =  this.eventService.getSingle(Number(this.id));
    //this.getEvent();
  
  }
  getEvent(){
    //alert(this.id);
    
    
  }
}
