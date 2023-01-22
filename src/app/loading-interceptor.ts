import { HttpInterceptorFn, HttpResponseBase } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingState } from './loading-state.service';
import { tap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingState = inject(LoadingState);
  loadingState.setLoading(true);
  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponseBase) {
        loadingState.setLoading(false);
      }
    })
  );
};
