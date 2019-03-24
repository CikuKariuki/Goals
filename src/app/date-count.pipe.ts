import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date=new Date();//gets current date and time
    let todayWithNoTime:any= new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference=Math.abs(value-todayWithNoTime)//returns value in milliseconds
    const secondsInADay=86400;
    var dateDifferenceSeconds =dateDifference*0.001//converts to seconds
    var dateCounter=dateDifferenceSeconds/secondsInADay;//converts to 24 hours by dividing number of total seconds returned by number of seconds in a day. If we returned the value in hours we would divide by 24 which we would call hoursInADay
    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      alert ("Do it TODAY!")
    }
  }

}
