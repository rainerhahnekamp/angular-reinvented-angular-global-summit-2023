import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Router } from '@angular/router';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { importProvidersFrom, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { loadingInterceptor } from './app/loading-interceptor';
import { AuthService } from './app/auth.service';
import { UnauthorizedComponent } from './app/holidays/unauthorized.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideRouter([
      {
        canMatch: [
          () => {
            const authService = inject(AuthService);
            const router = inject(Router);
            return authService.loggedIn$.pipe(
              map((isLoggedIn) =>
                isLoggedIn ? true : router.createUrlTree(['/unauthorized'])
              )
            );
          },
        ],
        path: 'holidays',
        loadChildren: () => import('./app/holidays/holiday-routes'),
      },
      { path: 'unauthorized', component: UnauthorizedComponent },
    ]),
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en'],
      }),
    },
    {
      provide: TRANSLOCO_LOADER,
      useFactory: () => {
        const httpClient = inject(HttpClient);
        return {
          getTranslation(lang: string): Observable<Translation> {
            return httpClient.get<Translation>(`/assets/${lang}.json`);
          },
        };
      },
    },
    importProvidersFrom([TranslocoModule]),
  ],
});
