import { AppRegistry } from "./multi-app.types";

export function getAppConfig<T extends AppRegistry>(hostname: string, registry: T) {
  const appType = resolveAppType(hostname, registry);
  return registry[appType];
}

function extractSubdomain(hostname: string) {
  return hostname.split(".")[0];
}

export function resolveAppType<T extends AppRegistry>(hostname: string, registry: T): keyof T {
  const subdomain = extractSubdomain(hostname);

  for (const [key, config] of Object.entries(registry)) {
    if (config.subdomains.includes(subdomain)) {
      return key as keyof T;
    }
  }

  for (const [key, config] of Object.entries(registry)) {
    if (config.isDefault) {
      return key as keyof T;
    }
  }

  throw new Error(`No app matched for hostname: ${hostname}`);
}
