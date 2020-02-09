import { Injectable } from '@angular/core';
import { Process } from './process';
import { Order } from './order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderCount: number = 0;
  orders: Order[];

  constructor() { 
    this.orders = [];
  }

  addProcess(process: Process, orderID: string): void {
    let order = this.orders.find(x => x.id === orderID);
    order.processes.push(process);
  }

  getProcesses(orderID: string){
    let order = this.orders.find(x => x.id === orderID);
    return order.processes;
  }

  setOrderID(){
    this.orderCount++;
  }

  getOrderID(){
    return this.orderCount;
  }

  addOrder(): Order{
    this.setOrderID();
    let order = new Order();
    order.id = this.orderCount.toString();
    order.processes = [];
    this.orders.push(order);
    return order;
  }

  getOrder(orderID: string): Order{
    return this.orders.find(x => x.id === orderID);
  }

  getOrders(): Order[]{
    return this.orders;
  }
}