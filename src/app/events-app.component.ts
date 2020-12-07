import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'events-app', 
  template:`
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `

 
})

export class EventsAppComponent {

   constructor(private testSrvc :TestService) {
            
  }

  ngOnInit(){
  }
  // PROPS
  title = this.testSrvc.getSomeMessage();


  //Methods

}
