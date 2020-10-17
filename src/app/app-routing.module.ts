import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { VenueDashboardComponent } from './venue-dashboard/venue-dashboard.component';

const routes: Routes = [
  { path: 'orders/:orderId', component: OrderComponent },
  { path: 'venues/:venueId/dashboard', component: VenueDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
