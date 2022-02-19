import { DataModel } from './../data-model';
import { ArrayService } from './../array.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  myimage: string = "assets/back.jpg"
  mode = "create";
  id: string;
  data: DataModel;

  constructor(public arrayService: ArrayService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'edit';
        this.id = paramMap.get('_id');
        this.arrayService.getData(this.id).subscribe(Data => {
          this.data = { _id: Data._id, Name: Data.Name, Date: Data.Date, Delivered: Data.Delivered, EmptyRecived: Data.EmptyRecived, Balanced: Data.Balanced, CashRecived: Data.CashRecived, CashBalanced: Data.CashBalanced };
          console.log(this.data);
        });

      }
      else {
        this.mode = 'create'
        this.id = null;
      }
    })
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.arrayService.AddDataEntry(form.value.Name, form.value.Date, form.value.Delivered, form.value.EmptyRecieved, form.value.Balanced, form.value.CashRecieved, form.value.CashBalanced);

    }
    else {
      this.arrayService.updateData(this.id, form.value.Name, form.value.Date, form.value.Delivered, form.value.EmptyRecieved, form.value.Balanced, form.value.CashRecieved, form.value.CashBalanced);

    }
    form.resetForm();
  }





}
