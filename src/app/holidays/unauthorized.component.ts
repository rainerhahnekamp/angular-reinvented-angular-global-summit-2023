import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth.service';

@Component({
  template: `<p>
    You have to <button mat-raised-button (click)="login()">login</button> first
  </p> `,
  standalone: true,
  imports: [MatButtonModule],
})
export class UnauthorizedComponent {
  #authService = inject(AuthService);
  login() {
    this.#authService.login();
  }
}
