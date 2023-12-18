import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),ScrollingModule],
};
