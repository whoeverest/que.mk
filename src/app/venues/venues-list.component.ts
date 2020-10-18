import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
})
export class VenuesListComponent implements OnInit {
  venues$: Observable<any[]>;
  currentUserId = 1;
  currentUserRef: DocumentReference;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.currentUserRef = this.firestore
      .collection('users')
      .doc(`${this.currentUserId}`).ref;
    this.venues$ = this.firestore
      .collection('venues', (ref) =>
        ref.where('ownerId', '==', this.currentUserRef)
      )
      .valueChanges({ idField: 'id' });
  }

  newVenue(): void {
    alert('new venue dialog');
  }
}
