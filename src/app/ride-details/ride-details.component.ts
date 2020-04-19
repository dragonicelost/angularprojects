import { Component, OnInit, Input, OnChanges, Output ,EventEmitter} from '@angular/core';
import { ridedetails } from './ridedetail';




@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  ngOnChanges() {
    // create header using child_id
    console.log("data value  --------->"+this.data)

    this.output=[];
    this.updateridedetails()
  }



 
  @Input()
  data:string;
  @Output()
  outputdata:EventEmitter<boolean> = new EventEmitter<boolean>();

  GoBack:boolean=false;
  id:number=101;
  booked=false;
  message:string;
   details:ridedetails[]=[
  {id:1,
  name:"lol.0",
  car:"BMW",
  seats:5,
  start:"php",
  destination:"gotham"},
  {
    id:2,
  name:"lol",
  car:"BMW",
  seats:2,
  start:"gotham",
  destination:"php"
  }
  ]
  output:ridedetails[]=[];
  updateridedetails()
  {

    console.log("data value>"+this.data)
    console.log(typeof this.output)
    for(let i in this.details)
    {
      if(this.details[i].start.toLowerCase()==this.data.toLowerCase())
      {
       
        this.output.push(this.details[i])
      }
    }


  }

  update(array:ridedetails[])
  {
    if(array[0].seats>0)
    {
      this.message="booked"
      array[0].seats-=1
      this.booked=true
    }
    else
    {
      this.message="cant booked full already"
    }
  }

  updateoutputdata()
  {
    this.outputdata.emit(true)
  
  }
}
