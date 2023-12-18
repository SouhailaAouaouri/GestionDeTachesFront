import {Component, ElementRef, OnInit} from '@angular/core';
import {Login} from "../../Models/login";
import {FormControlerService} from "../../Services/form-controles.service";
import {TokenStorageService} from "../../Services/Security/token-storage.service";
import {AuthServerService} from "../../Services/Security/auth-server.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isPasswordVisible = false;
  login :Login = new Login();
  showsuccessmessage: boolean=false;
  showerrormessage: boolean=false;
  constructor(public formService :FormControlerService,
              private router: Router,
              private elementRef: ElementRef,
              private authService:AuthServerService,
              private tokenStorage:TokenStorageService,
              ) { }

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
  onClear() {
    this.formService.formGroupLogin.reset();
  }
  onSubmit() {
    console.log("api login ...");
  }

  togglePasswordVisibility() {
    const passwordInput = this.elementRef.nativeElement.querySelector('#password');
    passwordInput.type = this.isPasswordVisible ? 'password' : 'text';
    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
