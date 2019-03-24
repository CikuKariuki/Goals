import { Component, OnInit } from '@angular/core';
import {Goal}from'../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals=[
    new Goal(1,"watch captain marvel","because it's new",new Date(2019,2,14)),
    new Goal(2,"buy hair","figure out what you want next", new Date(2019,2,15) ),
    new Goal(3,"get new shoes","comfortable ones", new Date(2019,3,5)),
    new Goal(4, 'Get cat Food','For dear dear night', new Date(2019,8,15)),
    new Goal(5, 'Solve math homework','Should take a short minute', new Date(2019,6,5)),
    new Goal(6, 'Plot my world domination plan','MUAHAHAHAHAHAHA!!!', new Date(2019,9,15)),
    
  ]
  toggleDetails(index){
    this.goals[index].showDescription=!this.goals [index].showDescription;
  }
  completeGoal(isComplete,index){
    if(isComplete){
      this.goals.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
