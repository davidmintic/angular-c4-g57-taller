import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  userForm: FormGroup = new FormGroup({});

  constructor(private servicioLogin: LoginService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      correo: [''],
      contrasenia: [''],
    });
  }

  ngOnInit(): void {
    this.servicioLogin.modeApp = 'full';
  }

  ngOnDestroy(): void {
    this.servicioLogin.modeApp = 'app';
  }

  login(): void {
    const credenciales = this.userForm.getRawValue();

    credenciales['contrasenia'] = Md5.hashStr(credenciales['contrasenia']);

    console.log(credenciales);
  }
}
