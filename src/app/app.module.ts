import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// env
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material ui
import { MatButtonModule } from '@angular/material/button';

// components
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { VenueDashboardComponent } from './venues/venue-dashboard.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { VenuesListComponent } from './venues/venues-list.component';
import { VenueMenuComponent } from './venues/venue-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    VenueDashboardComponent,
    EnterCodeComponent,
    VenuesListComponent,
    VenueMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
