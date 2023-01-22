import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Holiday } from './holiday';

@Injectable({ providedIn: 'root' })
export class HolidaysService {
  #httpClient = inject(HttpClient);

  find(): Observable<Holiday[]> {
    const baseUrl = 'https://api.eternal-holidays.net';
    return this.#httpClient
      .get<Holiday[]>('https://api.eternal-holidays.net/holiday')
      .pipe(
        map((holidays) =>
          holidays.map((holiday) => ({
            ...holiday,
            imageUrl: `${baseUrl}${holiday.imageUrl}`,
          }))
        )
      );
  }
}
