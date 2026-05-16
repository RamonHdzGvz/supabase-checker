import { Router } from '@angular/router';

export function openInNewTab(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openRouteInNewTab(router: Router, route: string) {
  const url = router.serializeUrl(router.createUrlTree([route]));
  window.open(url, '_blank', 'noopener,noreferrer');
}