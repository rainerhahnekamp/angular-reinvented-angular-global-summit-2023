import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  template: `<div class="flex flex-col items-start gap-y-4 p-8">
    <h1 class="text-lg">Welcome to modern Angular development</h1>
    <a mat-raised-button routerLink="/holidays">Holidays</a>
    <router-outlet />
  </div>`,
  standalone: true,
  imports: [RouterLink, MatButtonModule, RouterOutlet],
})
export class AppComponent {}
