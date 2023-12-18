import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlerService {

  constructor(private fb: FormBuilder,
              private fbProfil: FormBuilder) { }

  formGroupLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    isPatient: new FormControl(false)
  });

  formGroupProfil = this.fbProfil.group({
    nomProfil: ['', Validators.required],
    prenomProfil: ['', Validators.required],
    emailProfil: ['', Validators.required],
    telProfil: ['', Validators.required],
    adresseProfil: ['', Validators.required],
    specialiteProfil: ['', Validators.required],

  });

  /* login controle */
  get email() {
    return this.formGroupLogin.get('email');
  }

  get password() {
    return this.formGroupLogin.get('password');
  }

  get isPatient() {
    return this.formGroupLogin.get('isPatient');
  }
  /* fin login controle */
  /*  profil controle */
  get nomProfil() {
    return this.formGroupProfil.get('nomProfil');
  }

  get prenomProfil() {
    return this.formGroupProfil.get('prenomProfil');
  }
  get emailProfil() {
    return this.formGroupProfil.get('emailProfil');
  }

  get phoneProfil() {
    return this.formGroupProfil.get('telProfil');
  }
  get adresseProfil() {
    return this.formGroupProfil.get('adresseProfil');
  }

  get specialiteProfil() {
    return this.formGroupProfil.get('specialiteProfil');
  }
  /* fin profil controle */
}
