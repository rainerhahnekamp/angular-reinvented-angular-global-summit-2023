import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { importProvidersFrom, inject } from '@angular/core';
import { Observable } from 'rxjs';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: 'holidays',
        loadChildren: () => import('./app/holidays/holiday-routes'),
      },
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
