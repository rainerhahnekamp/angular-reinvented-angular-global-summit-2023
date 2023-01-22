import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  template: ` <h2>Subscribe to Newsletter</h2>
    <form [formGroup]="formGroup" (ngSubmit)="handleSubmit()">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input formControlName="name" matInput
      /></mat-form-field>
      <mat-form-field>
        <mat-label>EMail</mat-label>
        <input formControlName="email" matInput
      /></mat-form-field>
      <button mat-raised-button>Submit</button>
    </form>`,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
})
export class NewsletterComponent {
  formGroup = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
  });

  handleSubmit() {
    const formData: { name: string; email: string } =
      this.formGroup.getRawValue();
  }
}
