import { Component, OnInit } from '@angular/core';
import { rides } from './rides';
import {RideFilterPipePipe } from '../ride-filter-pipe.pipe'
import { Subject } from "rxjs";


@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  constructor(private rideFilterPipe:RideFilterPipePipe
    ) { }

  ngOnInit(): void {
    
  }
 array:rides[]=[
    {
      start:"Gotham",end:"php",seats:1
    },{
      start:"php",end:"Gotham",seats:2
    },{
      start:"php",end:"Jsp",seats:3
    }
  ]
  resetFormSubject: Subject<boolean> = new Subject<boolean>();
  hidetable:boolean=false;
  clicked:boolean=false;
  showall:boolean=false;
  hover:boolean;
  primary:string="bg-info"
  white:string="bg-white"
  dest:boolean[]=[false,false,true]
  sorted:boolean=false;
  arr:rides[];
  ridesdetails:boolean=false;
  data:string;
 
  

  
  check(destination:string)
  {
    console.log('inside function')
    if(destination=="togotham")
    {
    
      this.dest[0]=true
      this.dest[1]=false
      this.dest[2]=false
    }
    if(destination=="fromgotham")
    {
      this.dest[0]=false
      this.dest[1]=true
      this.dest[2]=false
    }
    if(destination=="all")
    {
      this.dest[0]=false
      this.dest[1]=false
      this.dest[2]=true
    }
  
    console.log(this.sorted)
    
 
    
  }

  hidetablefunc(){
  this.hidetable=true;
}

}
