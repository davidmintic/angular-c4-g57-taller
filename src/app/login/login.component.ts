import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ServiceRequestService } from "../service-request.service";
import { Md5 } from "ts-md5";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private servicioRequest: ServiceRequestService,
    private servicioAuth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      correo: [null, [Validators.required]],
      contrasenia: [null, [Validators.required]],
    });
  }

  login() {
    const credenciales = this.validateForm.getRawValue();
    credenciales["contrasenia"] = Md5.hashStr(credenciales["contrasenia"]);
    this.servicioRequest
      .postData("login", JSON.stringify(credenciales))
      .subscribe({
        next: (data) => {
          let token = data.token;
          this.servicioAuth.token = token;
          this.router.navigate(["/usuarios"]);
        },
        error: () => {},

        complete: () => {},
      });
  }
}
