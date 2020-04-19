import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Login } from './Login';
import { RideServiceService } from '../ride-service.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  rideService:RideServiceService;
  Login:FormGroup;
  User:Login[];
  errorm:string;
  constructor(private rideservice:RideServiceService,private formbuilder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.Login=this.formbuilder.group(
{
  username:["",Validators.required],
  pass:["",Validators.required]
})
  
    this.rideService=this.rideservice;
    this.rideService.getUsers().subscribe(
      
        userdata=>{
          this.User=userdata;
          console.log("length-->"+this.User.length)
        },
        error=>{
          this.errorm=<any>error;
        }
        
      
    )
    
  }
  

  successmessage:string;
  uname:string;
  pass:string;
  submitted=false
  errormessage:String;
  bookride=false;

check(name:string,password:string)
{
  this.successmessage=undefined;
  this.errormessage=undefined;

  let b:boolean=false;
  

  for(let i in this.User){
  
      if(this.User[i].name == name && this.User[i].password==password)
      {
        this.bookride=true;
        this.router.navigate(['book-ride']);
        b=true;

      }
  }

  b?this.successmessage="Success":this.errormessage="Invalid Credentails"

}
}
