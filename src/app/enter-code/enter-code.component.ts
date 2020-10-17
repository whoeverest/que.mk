import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
})
export class EnterCodeComponent implements OnInit {
  items: Observable<any>;

  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit(): void {
    this.items = this.firestore.collection('items').valueChanges();
  }

  enterOrderNo(orderNo: string): void {
    this.router.navigate(['orders', orderNo.toLowerCase()]);
  }
}
