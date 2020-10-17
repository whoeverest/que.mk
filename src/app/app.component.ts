import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'que';
  items: Observable<any>;

  constructor(firestore: AngularFirestore, private router: Router) {
    this.items = firestore.collection('items').valueChanges();
  }

  enterOrderNo(orderNo): void {
    this.router.navigate(['orders', orderNo]);
  }
}
