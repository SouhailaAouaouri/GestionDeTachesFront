import {Component, Inject, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-task-details-admin',
  templateUrl: './task-details-admin.component.html',
  styleUrls: ['./task-details-admin.component.css']
})
export class TaskDetailsAdminComponent implements OnInit {

  @Input() data: any;
  affecter:boolean=false;
  details:boolean=false;

  constructor() {}

  ngOnInit(): void {
    if(this.data[1]=='Details')
    {
      this.details=true;
      this.affecter=false;
    }
    else if(this.data[1]=='Affecter')
    {
      this.details=false;
      this.affecter=true;
    }


  }

}
