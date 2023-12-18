import { Component, OnInit } from '@angular/core';
import {Projet} from "../../Models/projet";
import {MatDialog} from "@angular/material/dialog";
import {TaskDetailsAdminComponent} from "../task-details-admin/task-details-admin.component";
import {CdkDragDrop, moveItemInArray, transferArrayItem,CdkDrag,CdkDropList} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})
export class DetailsProjetComponent implements OnInit {
  numTable: number =0 ;

  projet :Projet= new Projet();

  todo = ['Tâche 1', 'Tâche 2', 'Tâche 3'];
  inProgress = ['Tâche 4', 'Tâche 5'];
  done = ['Tâche 6', 'Tâche 7'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  BackToListProjets() {

  }

  showTaskDetails(id: number,numTable:number){
    console.log("hello from task "+ id);
    this.dialog.open(TaskDetailsAdminComponent, {
      width:'80%',
      data: {id: id, numTable:numTable}
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.sortLists();

  }

  sortLists(): void {
    this.todo.sort();
    this.inProgress.sort();
    this.done.sort();
  }
}
