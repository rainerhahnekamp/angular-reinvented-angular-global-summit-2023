import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Holiday } from './holiday';

@Injectable({ providedIn: 'root' })
export class HolidaysService {
  #httpClient = inject(HttpClient);

  find(): Observable<Holiday[]> {
    return this.#httpClient.get<Holiday[]>(
      'https://api.eternal-holidays.net/holiday'
    );
  }
}
