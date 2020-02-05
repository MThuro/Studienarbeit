import { ProcessCreationComponent } from './process-creation/process-creation.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderCreationComponent,
    ProcessCreationComponent   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}