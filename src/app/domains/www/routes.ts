import { Routes } from "@angular/router";
//import { profilesRedirectGuard } from "@domains/profiles/guards/profiles-redirect.guard";

export default [
  {
    path: "",
    loadComponent: () => import("@templates/layouts/main-layout/main-layout").then((m) => m.MainLayout),
    children: [
      {
        path: "",
        loadComponent: () => import("@domains/www/divorce-home-page/divorce-home-page").then((m) => m.DivorceHomePage),
      },
      // { path: 'plg/:CODE', canActivate: [profilesRedirectGuard], },
      { path: '**', redirectTo: '' }
    ],
  },
] satisfies Routes;
