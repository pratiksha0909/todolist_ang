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
  completed:string[]=[]


  addtext(event:any){

    this.task_text=event.target.value
  }
  addTask(){
    if(this.task_text==''){
      alert("Please Enter Task")
    }
    else{
      this.tasks.push(this.task_text)
      let v:any=document.getElementById("add")
      v.value=""
      this.task_text=''
    }
  

  }
  deleteTask(index:any){
    const audio= new Audio("assets/delete.mp3")
    audio.play();
    this.tasks.splice(index,1)

  }
  
  taskCompleted(index:any){

    const audio = new Audio('assets/delete.mp3')
    audio.play();

    setTimeout(()=>{
      this.completed.push(this.tasks[index])  
      this.tasks.splice(index,1);
    },500)
  }






}