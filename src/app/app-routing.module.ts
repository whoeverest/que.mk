import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { VenueDashboardComponent } from './venues/venue-dashboard.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { VenuesListComponent } from './venues/venues-list.component';

const routes: Routes = [
  { path: '', component: EnterCodeComponent },
  { path: 'orders/:orderId', component: OrderComponent },
  { path: 'venues', component: VenuesListComponent },
  { path: 'venues/:venueId/dashboard', component: VenueDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
