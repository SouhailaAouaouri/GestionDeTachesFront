import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormControlerService} from "../../Services/form-controles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  constructor(
              public formService :FormControlerService,
  ) { }
  ngOnInit(): void {
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
}
