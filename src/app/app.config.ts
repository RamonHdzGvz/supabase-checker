import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { customPrimeTheme } from './theme/theme.factory'; // Custom Prime Ng them
import { providePrimeNG } from 'primeng/config';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//
import { prolitigioPrimeTheme } from './theme/theme.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({ theme: { preset: prolitigioPrimeTheme, options: { darkModeSelector: false } } }),
    provideAnimations(),
    MessageService,
    provideAnimationsAsync()
  ],
};

export const AppConstants = {
  address: 'Mexicali. Baja California. Atención Presencial y en Línea.',
  phone: '(686) 201-7398',
  workingHours: 'Lunes a Viernes 9:00 - 18:00 hrs',
  email: 'info@asesorialegal.org'
};