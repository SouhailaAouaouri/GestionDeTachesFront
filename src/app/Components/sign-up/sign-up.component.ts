import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControlerService} from "../../Services/form-controles.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../Models/user";
import {MemberService} from "../../Services/member.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  member:User=new User();
  roleUser:string='';

  constructor(public formService:FormControlerService,
              private router:Router,
              private memberService :MemberService,
  ) { }
  ngOnInit(): void {
  }
  goToLogin() {
    this.formService.formGroupAddEmp.reset();
    this.router.navigate(['']);

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

  onClear() {
    this.member=new User();
    this.roleUser=''
    this.formService.formGroupAddEmp.reset();
  }
  onSubmit() {
    if(this.formService.formGroupAddEmp.valid){
      console.log('form submitted');
      this.member.email=this.formService.formGroupAddEmp.value.emailEmp;
      this.member.name=this.formService.formGroupAddEmp.value.nameEmp;
      this.member.password=this.formService.formGroupAddEmp.value.passwordEmp;
      this.member.username=this.formService.formGroupAddEmp.value.usernameEmp;
      this.member.phone=this.formService.formGroupAddEmp.value.phoneEmp;
      this.member.role=this.roleUser;
      console.log('user to add :',this.member);
      this.memberService.addMember(this.member).subscribe(data=> {
        console.log('data : ', data);
        this.member = new User();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },error => {
        console.log(error);
      })
    }else{
      console.log('invalid form');
      this.validateAllFormFields(this.formService.formGroupAddEmp);
    }
  }

  affecterRole(event: any) {
    this.roleUser = event.target.value;
    console.log('Rôle sélectionné :', this.roleUser);
  }
}
