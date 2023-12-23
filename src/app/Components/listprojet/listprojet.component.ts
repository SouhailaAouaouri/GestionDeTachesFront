import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControlerService} from "../../Services/form-controles.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-listprojet',
  templateUrl: './listprojet.component.html',
  styleUrls: ['./listprojet.component.css']
})
export class ListprojetComponent implements OnInit {

  showsuccessmessage: boolean=false;
  showerrormessage: boolean=false;

  constructor(private router :Router,
               public formService :FormControlerService,
              ) { }

  ngOnInit(): void {
    this.showerrormessage = false;
    this.showsuccessmessage = false;
  }

  seeProject(id: number) {
    this.router.navigate(['homeAdmin/detailsProject/',id]);


  }

  onSubmit() {
    if(this.formService.formGroupAddProject.valid){
      console.log("Valid form");
      console.log(this.formService.formGroupAddProject.value);
      this.formService.formGroupAddProject.reset();
      this.showerrormessage = false;
      this.showsuccessmessage = true;

    }else {
      console.log("Invalid form");
      this.showerrormessage = true;
      this.showsuccessmessage = false;
      this.validateAllFormFields(this.formService.formGroupAddProject);
    }

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
  onCancel() {
    this.formService.formGroupAddProject.reset();

  }
}
