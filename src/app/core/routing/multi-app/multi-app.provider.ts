import { Provider } from "@angular/core";
import { APP_REGISTRY_TOKEN } from "./multi-app.token";
import { AppRegistry } from "./multi-app.types";
import { validateRegistry } from "./multi-app.validator";

export function provideAppRegistry(registry: AppRegistry): Provider {
  validateRegistry(registry);
  return {
    provide: APP_REGISTRY_TOKEN,
    useValue: registry,
  };
}
