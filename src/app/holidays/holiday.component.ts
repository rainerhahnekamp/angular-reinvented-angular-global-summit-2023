import { Component, inject } from '@angular/core';
import { HolidaysService } from './holidays.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-holiday',
  standalone: true,
  template: `<h2 transloco="holidays.title"></h2>
    <ul *ngIf="holidays$ | async as holidays">
      <li *ngFor="let holiday of holidays">{{ holiday.title }}</li>
    </ul>`,
  imports: [NgIf, AsyncPipe, NgFor, TranslocoModule, JsonPipe],
})
export class HolidayComponent {
  #holidaysService = inject(HolidaysService);
  protected holidays$ = this.#holidaysService.find();

  translation = inject(TranslocoService).getTranslation();
}
