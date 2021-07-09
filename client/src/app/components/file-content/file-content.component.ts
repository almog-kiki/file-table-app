import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';    
import { Table } from '../../services/data.service';
 
@Component({
  selector: 'app-file-content',
  templateUrl: './file-content.component.html',
  styleUrls: ['./file-content.component.scss']
})
export class FileContentComponent implements OnInit {
  title: string;
  isLoading = true;
  tables: Array<Table>;
  selectedTable: Table;

  constructor(
    private eventEmitterService: EventEmitterService 
  ) { 
    this.title = 'Tables';
  }

  ngOnInit(): void {
    this.tables = undefined
    this.selectedTable= undefined
    if (this.eventEmitterService.showTableListDataSubs === undefined) {    
        this.eventEmitterService.showTableListDataSubs = this.eventEmitterService.invokeShowTableListData
          .subscribe((fileContent: any) => {
            this.isLoading = true;
            this.selectedTable = undefined;
            setTimeout(()=>{
              this.showTables(fileContent);
            },500)
          });    
    } 
  }

  ngOnDestroy():void{
    this.eventEmitterService.showTableListDataSubs  = undefined;
  }

  showTables(fileContent :any){
    this.tables = fileContent.tables as Array<Table>; 
    this.isLoading= false;
  }

  showTableDetails(table: Table){
    this.selectedTable = table
  }
}
