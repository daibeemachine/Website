import { bootstrapApplication } from '@angular/platform-browser';
import { routeConfig } from './app.routes';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
}).catch((err) => console.error(err));
