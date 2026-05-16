import { Routes } from "@angular/router";

export default [
  {
    path: "",
    loadComponent: () => import("@templates/layouts/main-layout/main-layout").then((m) => m.MainLayout),
    children: [
      {
        path: "",
        loadComponent: () => import("@domains/perfiles/qr-page/qr-page").then((m) => m.QrPage),
      }
    ],
  },
] satisfies Routes;
