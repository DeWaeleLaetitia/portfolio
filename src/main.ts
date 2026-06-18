import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app.component";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import routeConfig from "./routes";

bootstrapApplication(App, {
  providers: [
    provideRouter(
      routeConfig,
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
            anchorScrolling: 'enabled'
      }),
    ),
  ],
}).catch((err) => console.error(err));
