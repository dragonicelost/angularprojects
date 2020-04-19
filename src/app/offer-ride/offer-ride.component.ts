import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RideServiceService } from '../ride-service.service';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private service:RideServiceService) { }
  Registration:FormGroup
  ngOnInit(): void {
    console.log('hellosdvmosnvsdo v')
    this.Registration=this.formbuilder.group(
    {
      name:['',Validators.required],
      Slocation:['',Validators.required],
      destination:['',Validators.required],
      carname:['',Validators.required],
      seatsava:['',[Validators.min(1),Validators.max(8)]]
    }
    )
  }
checks:string
submitted:boolean;
check()
{
  this.checks=this.Registration.controls.name.value;
}
}
