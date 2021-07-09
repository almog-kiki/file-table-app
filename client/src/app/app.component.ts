import { Component } from '@angular/core';
import { EventEmitterService } from './services/event-emitter.service';    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Table App';
  isTableListExists = false;
  
  constructor(
    private eventEmitterService: EventEmitterService 
  ) { }

  ngOnInit(): void {
    if (this.eventEmitterService.showTableListComponentSubs === undefined) {    
        this.eventEmitterService.showTableListComponentSubs = this.eventEmitterService.invokeShowTableListComponent
          .subscribe(() => {
            this.isTableListExists = true;
          });    
    } 
  }

  ngOnDestroy():void{
    this.eventEmitterService.showTableListComponentSubs  = undefined;
  }
}
