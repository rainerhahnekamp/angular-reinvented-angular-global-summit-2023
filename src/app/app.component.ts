import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgStyle } from '@angular/common';
import { LoadingState } from './loading-state.service';

@Component({
  selector: 'app-root',
  template: `<div class="flex flex-col items-start gap-y-4 p-8">
    <h1 class="text-lg">Welcome to modern Angular development</h1>
    <mat-progress-bar
      mode="indeterminate"
      [ngStyle]="{ visibility: loading ? 'visible' : 'hidden' }"
    />

    <div class="flex gap-x-4">
      <a mat-raised-button routerLink="/">Home</a>
      <a mat-raised-button routerLink="/holidays">Holidays</a>
    </div>
    <router-outlet />
  </div>`,
  standalone: true,
  imports: [
    NgStyle,
    RouterLink,
    MatButtonModule,
    RouterOutlet,
    MatProgressBarModule,
  ],
})
export class AppComponent {
  loading = true;
  constructor() {
    inject(LoadingState).loading$.subscribe((value) => (this.loading = value));
  }
}
