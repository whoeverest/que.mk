import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

function createShortId() {
    const chars = 'qwertyuiopasdfghjklzxcvbnm';
    const nums = '1234567890';
    const all = chars.concat(nums);
    let length = 3;
    let id = '';
    while (length) {
        const rndCharIndex = Math.floor(Math.random() * all.length);
        id += (all[rndCharIndex]);
        length--;
    }
    return id;
}

@Component({
  selector: 'app-venue-dashboard',
  templateUrl: './venue-dashboard.component.html',
  styleUrls: ['./venue-dashboard.component.css']
})
export class VenueDashboardComponent implements OnInit {
    public orders: Observable<any>;
    public venueId: string;
    private venueRef: DocumentReference;

    constructor(private activeRoute: ActivatedRoute, private firestore: AngularFirestore) {}

    ngOnInit(): void {
        this.activeRoute.params.subscribe(params => {
            this.venueId = params.venueId;
            this.venueRef = this.firestore.collection('venues').doc(this.venueId).ref;
            this.orders = this.firestore
                .collection('orders', ref => ref.where('venueId', '==', this.venueRef))
                .valueChanges();
        });
    }

    newOrder(descEl, priceEl): void {
        const description = descEl.value;
        const price = Number(priceEl.value);
        const newId = createShortId();
        this.firestore.collection('orders').doc(newId).set({ description, price, venueId: this.venueRef }).then(val => {
            console.log(val);
        });
    }
}
