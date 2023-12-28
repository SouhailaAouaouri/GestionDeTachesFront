import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $: any; // Import jQuery

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit, AfterViewInit {
  tasks: any[] = [];
  constructor() { }

  ngOnInit(): void {

    this.tasks = [
      {
        "id": 1,
        "title": "Task 1",
        "description": "Description for Task 1",
        "startDate": "2023-12-20",
        "dueDate": "2023-12-27",
        "completed": false,
        "level": 'High',
        "periorty": 'Must',

        "labels": [
          {
            "id": 1,
            "name": "Label 1"
          }
        ],
        "projectId": 1,
        "projectName": "Sample Project"
      },
      {
        "id": 2,
        "title": "Task 2",
        "description": "Description for Task 2",
        "startDate": "2023-12-20",
        "dueDate": "2023-12-27",
        "completed": false,
        "level": 'Low',
        "periorty": 'Will',
        "labels": [
          {
            "id": 2,
            "name": "Label 2"
          }
        ],
        "projectId": 1,
        "projectName": "Sample Project"
      }
    ]
  }

  ngAfterViewInit(): void {
    $.noConflict();
    $(document).ready(function() {
      $('#taskTable').DataTable();
    });
  }

  protected readonly Date = Date;
}
