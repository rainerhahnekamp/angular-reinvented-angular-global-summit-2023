import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingState {
  #loading$ = new BehaviorSubject(false);
  loading$ = this.#loading$.asObservable();

  setLoading(value: boolean) {
    window.setTimeout(() => this.#loading$.next(value));
  }
}
