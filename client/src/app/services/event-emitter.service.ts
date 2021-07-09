import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  
  invokeShowTableListComponent = new EventEmitter(); 

  invokeShowTableListData = new EventEmitter<string>();    
  showTableListDataSubs: Subscription;    
  showTableListComponentSubs: Subscription;    
    
  constructor() { }    
    
  showTableListComponent(){
    this.invokeShowTableListComponent.emit()
  }

  showTableListData(fileContent: any) {
    this.invokeShowTableListData.emit(fileContent);
  } 
}
