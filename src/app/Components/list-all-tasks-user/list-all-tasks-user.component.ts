import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Task} from "../../Models/task";
import {TaskService} from "../../Services/task.service";
import {ProjectService} from "../../Services/project.service";
import {Projet} from "../../Models/projet";
import {ActivatedRoute} from "@angular/router";
declare var $: any; // Import jQuery

@Component({
  selector: 'app-list-all-tasks-user',
  templateUrl: './list-all-tasks-user.component.html',
  styleUrls: ['./list-all-tasks-user.component.css']
})
export class ListAllTasksUserComponent implements OnInit , AfterViewInit{
  tasks: Task[] = [];
  projetId: any;
  listTask: Task[] = new Array<Task>();

  constructor(private route: ActivatedRoute,
              private taskService :TaskService,
              private projectService:ProjectService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.projetId = id;
        this.taskService.getTasksByProjectId(this.projetId).subscribe(tasks => {
          this.listTask=tasks as Task[];
          console.log('listTask  :', this.listTask);
        },error => {
          console.log(error);
        })
    });
  }

  ngAfterViewInit(): void {
    $.noConflict();
    $(document).ready(function() {
      $('#taskTable').DataTable();
    });
}

}
