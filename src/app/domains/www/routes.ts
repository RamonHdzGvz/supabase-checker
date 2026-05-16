import { Routes } from "@angular/router";
//import { profilesRedirectGuard } from "@domains/profiles/guards/profiles-redirect.guard";

export default [
  {
    path: "",
    loadComponent: () => import("@templates/layouts/main-layout/main-layout").then((m) => m.MainLayout),
    children: [
      {
        path: "",
        loadComponent: () => import("@domains/www/home-page/home-page").then((m) => m.HomePage),
      },
      // { path: 'plg/:CODE', canActivate: [profilesRedirectGuard], },
      { path: '**', redirectTo: '' }
    ],
  },
] satisfies Routes;
