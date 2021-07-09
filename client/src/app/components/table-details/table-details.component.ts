import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../services/data.service';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {
  
  @Input() tableDetails: Table;
  constructor() {
  }

  ngOnInit(): void {
  }

}
