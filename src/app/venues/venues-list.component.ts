import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
})
export class VenuesListComponent implements OnInit {
  venues: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.venues = this.firestore
      .collection('venues')
      .valueChanges({ idField: 'id' });
  }
}
