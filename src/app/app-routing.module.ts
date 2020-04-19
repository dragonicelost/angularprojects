import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';


const routes: Routes = [{path:'login',component:LoginComponent,pathMatch:"full" ,redirectTo:''},
            {path:'book-ride',component:BookRideComponent,pathMatch:"full"},
            {path:'ride-details',component:RideDetailsComponent},
            {path:'offer-ride',component:OfferRideComponent},
            {path:'',component:LoginComponent},
            {path:'**',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcompo=[LoginComponent,BookRideComponent,RideDetailsComponent,OfferRideComponent]
