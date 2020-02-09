import { OrderService } from './../order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { saveAs } from 'file-saver/FileSaver';
import { Order } from '../order';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.css']
})
export class OrderCreationComponent implements OnInit {
  order: Order;

  constructor(private router: Router, private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.order = this.orderService.getOrder(id);
  }

  addProcess(): void {
    this.router.navigateByUrl("/process-creation");
  }

  save(): void{
    debugger;
    let text = this.order.id + "/";
    for(let process of this.order.processes) {
      let color = this.hexToRgb(process.color)
      text = text + (process.id).toString() +"#(" + color.r + "," + color.g + "," + color.b +");";
    }
    var data = new Blob([text], { type: 'text/plain;charset=utf-8' });  
    saveAs(data, 'Order '+this.order.id+".txt"); 
    this.router.navigateByUrl("/order-list");
  }

  onDrop(e: CdkDragDrop<string[]>): void{
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data,
        e.previousIndex,
        e.currentIndex);
    }  
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: ("00"+parseInt(result[1], 16)).slice(-3),
      g: ("00"+parseInt(result[2], 16)).slice(-3),
      b: ("00"+parseInt(result[3], 16)).slice(-3)
    } : null;
  }

}
