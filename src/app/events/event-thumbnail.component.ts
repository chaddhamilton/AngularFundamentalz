import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IEvent} from '../shared/models/event.model';

@Component({
  selector: 'event-thumbnail',
 // templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
  template: 
    `   <div class="well hoverwell thumbnail" [routerLink]="['/events/', event.id]">
          <h2>{{event?.name}}</h2>
          <div>Date:{{event?.date}}</div>
          <div [ngClass]="getStartTimeClass()"> Time: {{event?.time}}
          <span [ngSwitch]="event?.time">
            <span *ngSwitchCase="'8:00 am'">Early</span>
            <span *ngSwitchCase="'10:00 am'">Late</span>
            <span *ngSwitchDefault>Normal</span>
          </span></div>
          <div>Price: \${{event?.price}}</div>
          <div *ngIf="event?.location" >Location: {{event.location.city}}, {{event.location.country}} </div>
          <div *ngIf="event?.onlineUrl">Url: {{event.onlineUrl}} </div>
       </div>    
    `,
    styles: [
    `.well div {color: #bbb}
      .thumbnail{min-height:200px}
      .early {color:#fff !Important; font-weight:bold}
    `
    ]
})

export class EventThumbnailComponent implements OnInit {
// INPUT
 @Input() event :IEvent;
 @Input() someVar: string;

 //OUTPUT Params
@Output() btn1Clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
someProperty : string ="some value";

getDetail(){
  location.href="/events/"+this.event.id;
}

isEarlyStartTime : boolean = false;
getStartTimeClass(){
  if(this.event && this.event.time ==='8:00 am'){
    return 'early';
  }
  else {return '';}


}

}
