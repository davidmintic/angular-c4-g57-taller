import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-taller-g57';

  constructor(public servicioLogin: LoginService, private router: Router) {}

  logout(): void {
    this.router.navigate(['/login']);
  }
}
