import { Component, OnInit } from '@angular/core';
import {FormControlerService} from "../../Services/form-controles.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employees-admin',
  templateUrl: './employees-admin.component.html',
  styleUrls: ['./employees-admin.component.css']
})
export class EmployeesAdminComponent implements OnInit {

  constructor(public formService:FormControlerService) { }

  ngOnInit(): void {
  }

  onClear() {
    this.formService.formGroupAddEmp.reset();
  }
onSubmit() {
    if(this.formService.formGroupAddEmp.valid){
      console.log('form submitted');
      console.log(this.formService.formGroupAddEmp.value);
    }else{
      console.log('invalid form');
      this.validateAllFormFields(this.formService.formGroupAddEmp);
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
    } );
  }
}
