import { CanActivateFn } from "@angular/router";

export const plgRedirectGuard: CanActivateFn = async (route) => {
  const code = route.params['CODE'];

  if (!code) return false;

  try {
    const res = await fetch(`/api/redirects/${code}`);
    const data = await res.json();

    if (data?.url) {
      window.location.replace(data.url);
      return false;
    }
  } catch (e) {
    console.error(e);
  }

  window.location.replace('/');
  return false;
};