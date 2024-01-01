import { Component, OnInit } from '@angular/core';
import {Label} from "../../Models/label";
import {FormControlerService} from "../../Services/form-controles.service";
import {FormControl, FormGroup} from "@angular/forms";
import {LabelService} from "../../Services/label.service";
import {Projet} from "../../Models/projet";

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  label:Label=new Label();
  listLabels:Label[]=[];

  constructor(public formService:FormControlerService,
              private labelService:LabelService) { }

  ngOnInit(): void {
    this.labelService.getAllLabels().subscribe(data =>{
      console.log('data : ',data);
      this.listLabels=data as Label[];
      console.log('list labels :',this.listLabels);
    })
  }

  onCancel() {
    this.label=new Label();
    this.formService.formGroupAddEmp.reset();
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

  onSubmit() {
    if(this.formService.formGroupLabel.valid){
      this.label.name=this.formService.formGroupLabel.value.nameLabel;
      console.log('label',this.label);
      this.labelService.addLabel(this.label).subscribe(data=>{
        console.log('data :',data);
        setTimeout(()=>{
          this.onCancel();
          window.location.reload();
        },1000)
      })
    }else
      this.validateAllFormFields(this.formService.formGroupLabel)

  }

  deleteLabel(id: any) {
    this.labelService.deleteLabel(id).subscribe(()=>{
      console.log('deleting succesfull !');
      window.location.reload();
    })

  }

  getLabelById(id: any) {
    this.labelService.getLabelById(id).subscribe(data =>{
      this.label=data as Label;
      console.log('label selected :',this.label);
    })

  }
}
