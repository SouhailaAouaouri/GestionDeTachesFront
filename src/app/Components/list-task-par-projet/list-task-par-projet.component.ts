import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TaskService} from "../../Services/task.service";
import{Task} from "../../Models/task";

@Component({
  selector: 'app-list-task-par-projet',
  templateUrl: './list-task-par-projet.component.html',
  styleUrls: ['./list-task-par-projet.component.css']
})
export class ListTaskParProjetComponent implements OnInit {

  listTaskToDO :Task[]=[];
  listTaskDone :Task[]=[];
  listTaskInProgress :Task[]=[];
  selectedTask :Task=new Task();

  todo = ['Tâche 1', 'Tâche 2', 'Tâche 3'];
  inProgress = ['Tâche 4', 'Tâche 5'];
  done = ['Tâche 6', 'Tâche 7'];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskByStatusAndMemberId('Done',1).subscribe(data =>{
      this.listTaskDone=data as Task [];
      console.log(this.listTaskDone);
    },error => {
      console.log(error);
    });
    this.taskService.getTaskByStatusAndMemberId('ToDo',1).subscribe(data =>{
      this.listTaskToDO=data as Task [];
      console.log(this.listTaskToDO);
    },error => {
      console.log(error);
    });
    this.taskService.getTaskByStatusAndMemberId('InProgress',1).subscribe(data =>{
      this.listTaskInProgress=data as Task [];
      console.log(this.listTaskInProgress);
    },error => {
      console.log(error);
    });
  }
  drop(taskList: Task[], event: CdkDragDrop<Task[]>): void {
    console.log('Début de la fonction drop');

    if (event.previousContainer === event.container) {
      console.log('Condition 1');
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('Condition 2');
      this.selectedTask = taskList[event.previousIndex];

      if (this.selectedTask && this.selectedTask.id !== undefined) {
        console.log('Tâche', this.selectedTask.id, 'déplacée vers la liste appropriée !');
      } else {
        console.error('La tâche déplacée ne contient pas une propriété "id" définie correctement.');
      }

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log('Fin de la fonction drop');
    this.sortLists();
  }
  sortLists(): void {
    this.listTaskInProgress.sort();
    this.listTaskToDO.sort();
    this.listTaskDone.sort();
  }

  onClear() {
    this.selectedTask=new Task();
  }


  getDetailsTask(id: any) {
    this.taskService.taskById(id).subscribe(data=>{
      this.selectedTask=data as Task;
      console.log('selected task :',this.selectedTask);
    },error => {
      console.log(error);
    })

  }
}
