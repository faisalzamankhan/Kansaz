import { DataModel } from './../data-model';
import { ArrayService } from './../array.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnDestroy {
  private Unsubs: Subscription;
  data: DataModel[] = [];
  displayedColumns: string[];
  constructor(public ArrayService: ArrayService) { }


  Delete(id) {
   
    this.ArrayService.deletePost(id);
  }



  ngOnInit() {
    this.ArrayService.getDataEntry()
    this.Unsubs = this.ArrayService.Updatelistener.subscribe((data: DataModel[]) => {
      this.data = data;

     
    })
    this.displayedColumns = ['Name', 'Date', 'Delivered', 'EmptyRecived', 'Balanced', 'CashRecived', 'CashBalanced', 'Update', 'Delete'];
   
  } 
  ngOnDestroy() {
    this.Unsubs.unsubscribe()
  }

}
