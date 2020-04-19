import { Pipe, PipeTransform } from '@angular/core';
import { rides } from './book-ride/rides';

@Pipe({
  name: 'rideFilterPipe',
  pure:false
})
export class RideFilterPipePipe implements PipeTransform {

  transform( args:rides[],value: boolean[]): rides[] {
    console.log("hello pipe")
    console.log(value[0].valueOf)
    console.log(args==undefined)
    
      if(value[0])
     {
       console.log("1 is true")
        let arr:rides[]=args.filter(
          function (ar)
          {
              if(ar.end == "Gotham")
              return true;
          }
        )
        
        console.log("inside pipe-->"+arr[0].seats)
        return arr;
        
      }
      else if(value[1])
      {
        let arr:rides[]=args.filter(
          function (ar)
          {
            if(ar.start == "Gotham")
            return true;
          }
        )
       
        console.log(arr)
        return arr;
     
      }
      else
      {
      return args;
      }
     
  }


}
