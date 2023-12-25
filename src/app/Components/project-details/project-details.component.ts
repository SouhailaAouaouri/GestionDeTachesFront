import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormControlerService} from "../../Services/form-controles.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../Services/project.service";
import {Projet} from "../../Models/projet";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projetId: any;
  project :Projet=new Projet();

  constructor(private projectService:ProjectService,
              private route :ActivatedRoute,
              public formService :FormControlerService,
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.projetId = id;
    this.projectService.getProjectById(1).subscribe(data => {
      console.log('data : ', data);
      this.project = data as Projet;
      console.log('project  :',this.project);
    });
  });

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  onSubmitTask() {
    if(this.formService.formGroupAddTask.valid){
      console.log("Valid form");
      console.log(this.formService.formGroupAddTask.value);
      this.formService.formGroupAddTask.reset();

    }else {
      console.log("Invalid form");
      this.validateAllFormFields(this.formService.formGroupAddTask);

    }

  }
  onSubmitProject() {
    if(this.formService.formGroupAddProject.valid){
      console.log("Valid form");
      console.log(this.formService.formGroupAddProject.value);
      this.formService.formGroupAddProject.reset();
    }else {
      console.log("Invalid form");
      this.validateAllFormFields(this.formService.formGroupAddProject);

    }
  }

  onClear() {
    this.formService.formGroupAddTask.reset();
    this.formService.formGroupAddProject.reset();
  }

  assignTask(projectId: number, taskId: number) {
    this.projectService.assignTask(projectId,taskId).subscribe(data => {
      console.log('succses assign task');
      console.log('data : ', data);
    });

  }

}
