import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../Services/Security/token-storage.service";
import {FormControlerService} from "../../Services/form-controles.service";
import {AuthServerService} from "../../Services/Security/auth-server.service";
import {Login} from "../../Models/login";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role : string = 'admin';
  login :Login = new Login();
  showsuccessmessage: boolean=false;
  showerrormessage: boolean=false;
  constructor(public formService :FormControlerService,
              private router:Router,
              private authService :AuthServerService,
              private tokenStorage :TokenStorageService) { }

  ngOnInit(): void {
    this.showsuccessmessage = false;
    this.showerrormessage = false;
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
  onSubmit() {

    if (this.formService.formGroupLogin.valid) {
      this.login.email = this.formService.formGroupLogin.value.email;
      this.login.password = this.formService.formGroupLogin.value.password;
      console.log('login :',this.login);
      console.log('role : ',this.role);
      if(this.role==='user'){
        this.router.navigate(['homeUser/DashbordUser']);
      }else if(this.role==='admin') {
        this.router.navigate(['homeAdmin/DashbordAdmin']);
      }
    }
    else {
      this.validateAllFormFields(this.formService.formGroupLogin);
    }
  }

  onClear() {
    this.formService.formGroupLogin.reset();
  }

}
