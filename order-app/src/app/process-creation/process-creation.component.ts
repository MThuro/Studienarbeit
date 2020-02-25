import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { Process } from './../process';

@Component({
  selector: 'app-process-creation',
  templateUrl: './process-creation.component.html',
  styleUrls: ['./process-creation.component.css']
})
export class ProcessCreationComponent implements OnInit {
  orderID: string;

  constructor(private router: Router, private orderService: OrderService, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.orderID = this.orderService.getOrderID().toString();
  }

  add(id: string, color: string): void {
    if (!id){
      this.snackbar.open("Please enter all mandatory fields", "Dismiss",{
        duration: 3000,
      });
      return;
    }
    let process = new Process();    
    process.id = id;
    process.color = color;
    this.orderService.addProcess(process, this.orderID);
    this.router.navigate(["/order-creation",this.orderID]);
  }
}
