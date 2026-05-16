import { createAppRegistry, createAppRoutes } from "@core/routing/multi-app/multi-app.factory";

export const registry = createAppRegistry({
  www: {
    subdomains: ["www"],
    isDefault: true,
    loadRoutes: () => import("@domains/www/routes"),
    layout: () => import("@templates/layouts/main-layout/main-layout").then((m) => m.MainLayout),
  },
  perfiles: {
    subdomains: ["perfiles"],
    loadRoutes: () => import("@domains/perfiles/routes"),
    layout: () => import("@templates/layouts/main-layout/main-layout").then((m) => m.MainLayout),
  },
});

export const routes = createAppRoutes(registry, window.location.hostname);