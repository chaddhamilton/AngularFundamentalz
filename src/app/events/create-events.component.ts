import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { fromEvent } from "rxjs"


@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
}) 
export class CreateEventsComponent implements OnInit {

  isDirty :boolean =false;

  constructor(private router:Router) { }

  ngOnInit(): void {
 fromEvent(document, "click").subscribe(value =>{
   alert();
 });
 
  }

  
  cancel(){
  this.router.navigate(['/events']);
  //window.location.href='/events';
  }
}
