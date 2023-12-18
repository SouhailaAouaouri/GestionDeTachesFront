import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-task-details-admin',
  templateUrl: './task-details-admin.component.html',
  styleUrls: ['./task-details-admin.component.css']
})
export class TaskDetailsAdminComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  onActionSelected(nonEffectue: string) {

  }
}
