import { ProcessCreationComponent } from './process-creation/process-creation.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo:'/', pathMatch: 'full'},
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-creation/:id', component: OrderCreationComponent },
  { path: 'process-creation', component: ProcessCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
