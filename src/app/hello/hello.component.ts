import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  constructor() { }

  
  ngOnInit(): void {
  }

  courseName:string="angular";
  lol:string;
  age:number=9;
  name: string = "kbsdbkudkud";
 changeName() {
    this.courseName="react";
  }
  showUser(uname:string)
  {
      console.log(uname);
  }
  lolz(lol:string)
  {
      this.lol=lol;
  }
  agez(n:number){
  
    // let currentYear=new Date("YYYY");
    // console.log(currentYear)
    // let lol12=parseInt(currentYear.toString());
    // console.log(lol12)
   let temp:number= 2020-n;
  //  console.log(temp);
   this.age=temp;
  }
}
