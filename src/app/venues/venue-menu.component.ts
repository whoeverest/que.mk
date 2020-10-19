import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-menu',
  templateUrl: './venue-menu.component.html',
})
export class VenueMenuComponent implements OnInit {
  private venueId;
  public venue$: Observable<any>;

  constructor(
    private firestore: AngularFirestore,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.venueId = params.venueId;
      this.venue$ = this.firestore
        .collection('venues')
        .doc(this.venueId)
        .valueChanges();
    });
  }
}
