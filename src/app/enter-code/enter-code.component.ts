import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
})
export class EnterCodeComponent {
  constructor(private router: Router) {}

  enterOrderNo(orderNo: string): void {
    this.router.navigate(['orders', orderNo.toLowerCase()]);
  }
}
