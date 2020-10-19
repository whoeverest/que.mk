import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public orderId: string;
  public order: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.orderId = params.orderId;
      this.order = this.firestore
        .collection('orders')
        .doc(this.orderId)
        .valueChanges()
        .subscribe((order) => {
          // todo: use async pipe instead of subscribing manually
          this.order = order;
        });
    });
  }
}
