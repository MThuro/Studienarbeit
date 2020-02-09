import { OrderService } from './../order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  addOrder(): void {
    let order = this.orderService.addOrder();
    this.router.navigate(["/order-creation",order.id]);
  }
}
