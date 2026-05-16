import { AppRegistry } from "./multi-app.types";

export function validateRegistry(registry: AppRegistry) {
  const seen = new Set();

  Object.entries(registry).forEach(([key, config]) => {
    if (!config.subdomains.length) {
      throw new Error(`App "${key}" must define at least one subdomain`);
    }
    config.subdomains.forEach((sub) => {
      if (seen.has(sub)) {
        throw new Error(`Duplicate subdomain: ${sub}`);
      }
      seen.add(sub);
    });
  });
}
