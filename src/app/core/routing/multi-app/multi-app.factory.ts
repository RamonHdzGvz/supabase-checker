import { Routes } from "@angular/router";
import { AppRegistry } from "./multi-app.types";
import { APP_REGISTRY_TOKEN } from "./multi-app.token";
import { inject } from "@angular/core";
import { resolveAppType } from "./multi-app.resolver";

export function createAppRegistry<T extends AppRegistry>(registry: T): T {
  return registry;
}

export function createAppRoutes(registry: AppRegistry, hostname: string): Routes {
  const appType = resolveAppType(hostname, registry);
  const config = registry[appType];

  return [
    {
      path: "",
      loadChildren: config.loadRoutes,
      canActivate: config.guards?.canActivate ?? [],
      canMatch: config.guards?.canMatch ?? [],
    },
    {
      path: "**",
      redirectTo: "",
    },
  ];
}

export function createSubdomainRoutes(children: Routes): Routes {
  const registry = inject(APP_REGISTRY_TOKEN);
  const appType = resolveAppType(window.location.hostname, registry);
  const config = registry[appType];

  if (!config.layout) {
    return children;
  }

  return [
    {
      path: "",
      loadComponent: config.layout,
      children,
    },
  ];
}
