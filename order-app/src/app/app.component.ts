import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Order App';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/order-list");
  }
}
