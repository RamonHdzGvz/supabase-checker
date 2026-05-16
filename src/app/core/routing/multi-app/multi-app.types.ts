import { CanActivateFn, CanMatchFn } from "@angular/router";

export type AppRegistry = Record<string, SubdomainConfig>;

export type SubdomainConfig = {
  subdomains: readonly string[];
  loadRoutes: () => Promise<any>;
  guards?: {
    canActivate?: CanActivateFn[];
    canMatch?: CanMatchFn[];
  };
  layout?: () => Promise<any>;
  isDefault?: boolean;
};
