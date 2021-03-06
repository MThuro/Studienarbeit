import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule, 
  MatCardModule,
  MatSnackBarModule,
  MatSidenavModule, 
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule, 
  MatListModule,
  MatSnackBar,
  MatExpansionModule } from '@angular/material';
  import {FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
imports: [
MatDatepickerModule,
MatFormFieldModule,
MatNativeDateModule,
MatInputModule,
MatSelectModule,
MatCardModule,
MatSnackBarModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatListModule,
MatSidenavModule,
MatExpansionModule,
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
DragDropModule
],
exports: [
MatDatepickerModule,
MatFormFieldModule,
MatNativeDateModule,
MatInputModule,
MatSelectModule,
MatCardModule,
MatSnackBarModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatListModule,
MatSidenavModule,
MatExpansionModule,
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
CommonModule,
DragDropModule
],
providers: [ MatDatepickerModule ],
})

export class MaterialModule { }
