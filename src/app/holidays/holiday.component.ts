import { Component, inject } from '@angular/core';
import { HolidaysService } from './holidays.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-holiday',
  standalone: true,
  template: `<h2>Holidays</h2>
    <ul *ngIf="holidays$ | async as holidays">
      <li *ngFor="let holiday of holidays">{{ holiday.title }}</li>
    </ul>`,
  imports: [NgIf, AsyncPipe, NgFor],
})
export class HolidayComponent {
  #holidaysService = inject(HolidaysService);
  protected holidays$ = this.#holidaysService.find();
}
