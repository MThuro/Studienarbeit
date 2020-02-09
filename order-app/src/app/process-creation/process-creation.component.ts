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

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.orderID = this.orderService.getOrderID().toString();
  }

  add(id: string, color: string): void {
    let process = new Process();    
    process.id = id;
    process.color = color;
    this.orderService.addProcess(process, this.orderID);
    this.router.navigate(["/order-creation",this.orderID]);
  }
}
