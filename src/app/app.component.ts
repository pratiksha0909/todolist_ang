import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanagment';
  task_text:string=""
  tasks:string[]=[]

/*this function for add text using input in list*/
  addText(event:any){
    this.task_text=event.target.value

  }
  /*this function for using buttun it will add text in list*/

  addTask(){
    if(this.task_text==''){
      alert("Please Enter a Task")

    }
    else{
      this.tasks.push(this.task_text)

      /*this for clear the input bx after adding the value*/
          let v:any=document.getElementById('add')
          v.value=""
          this.task_text=""

    }


  }
  deleteTask(index:any){
    this.tasks.splice(index,1)


  }
}
