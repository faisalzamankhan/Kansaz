import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
  //  LoginComponent,
    TableComponent,
    HeaderComponent,
    DataEntryComponent,
   // FormComponent,
   // EDisplayComponent,
   // SignupComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,



  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
