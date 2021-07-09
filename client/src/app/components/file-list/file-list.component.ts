import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { EventEmitterService } from '../../services/event-emitter.service';    

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  title: string;
  isLoading = true;
  files: any;
  selectedItem: string;

  constructor(
    private dataService: DataService, 
    private eventEmitterService: EventEmitterService 
  ) { 
    this.title = "File Names";
  }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList() {
    this.isLoading = true;
    this.dataService.getFileNames()
       .subscribe(
        data => {
          this.files = data;
          this.isLoading = false;
        });
  }

  getFileContent(fileName: string) {
    this.selectedItem = fileName  
    this.eventEmitterService.showTableListComponent();
    this.dataService.get(fileName)
    .subscribe(
      data => {
        this.eventEmitterService.showTableListData(data);
      });
  }
}
