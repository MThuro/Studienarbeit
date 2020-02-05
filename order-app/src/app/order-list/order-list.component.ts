import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addOrder(): void {
    this.router.navigateByUrl("/order-creation");
  }
}
