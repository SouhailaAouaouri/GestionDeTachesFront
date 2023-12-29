import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TaskService} from "../../Services/task.service";
import {Task} from "../../Models/task";

declare var $: any; // Import jQuery

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit, AfterViewInit {
  tasks: Task[] = [];
  constructor(private taskService :TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(data =>{
      this.tasks=data as Task[];
    },error => {
      console.log(error);
    })


  }

  ngAfterViewInit(): void {
    $.noConflict();
    $(document).ready(function() {
      $('#taskTable').DataTable();
    });
  }

  protected readonly Date = Date;
}
