import { OrderService } from './../order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Process } from '../process';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.css']
})
export class OrderCreationComponent implements OnInit {
  processes : Process[];

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.processes = this.orderService.getProcesses();
  }

  addProcess(): void {
    this.router.navigateByUrl("/process-creation");
  }

  save(): void{

  }

}
