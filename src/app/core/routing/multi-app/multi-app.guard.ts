import { CanMatchFn } from "@angular/router";

export const localhostGuard: CanMatchFn = () => {
  const hostname = window.location.hostname;
  const isLocalhost = hostname.includes("localhost");
  return isLocalhost;
};
