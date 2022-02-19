
import { RouterModule, Routes } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { TableComponent } from './table/table.component';

import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'createntry', component: DataEntryComponent },
  { path: 'editentry/:_id', component: DataEntryComponent },
 
  

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }