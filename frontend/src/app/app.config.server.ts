import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes, RenderMode } from '@angular/ssr';
import { appConfig } from './app.config';

// This app always needs a live backend (job list, SSE subscriptions), so every
// route is rendered per-request rather than at build time. Without this,
// outputMode: 'server' defaults to build-time prerendering for unclassified
// routes, which fails because there's no backend available during the build.
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes([{ path: '**', renderMode: RenderMode.Server }]))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
