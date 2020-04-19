import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingcompo} from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { RideFilterPipePipe } from './ride-filter-pipe.pipe';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RideServiceService } from './ride-service.service';
import { OfferRideComponent } from './offer-ride/offer-ride.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    BookRideComponent,
    RideFilterPipePipe,
    RideDetailsComponent,
    OfferRideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RideServiceService,RideFilterPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
