import { SmartCacheService } from '@core/services/smart-cache.service';
import { DAY_MS, HOUR_MS, MINUTE_MS, SECOND_MS, WEEK_MS } from '@core/utils/time/time-constants';

export const TTL = {
  NONE: 0,
  TEN_SECONDS: 10 * SECOND_MS,
  ONE_MIN: MINUTE_MS,
  FIVE_MIN: 5 * MINUTE_MS,
  TEN_MIN: 10 * MINUTE_MS,
  THIRTY_MIN: 30 * MINUTE_MS,
  ONE_HOUR: HOUR_MS,
  FIVE_HOURS: 5 * HOUR_MS,
  TWELVE_HOURS: 12 * HOUR_MS,
  ONE_DAY: DAY_MS,
  ONE_WEEK: WEEK_MS,
  INFINITY: Infinity,
} as const;

interface CacheableContext {
  cache: SmartCacheService;
}

interface CacheOptions {
  key: string | ((...args: any[]) => string);
  ttl: number;
  tags?: string[];
}

export function Cacheable(options: CacheOptions) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (this: CacheableContext, ...args: any[]) {
      let cacheKey: string;

      if (typeof options.key === 'function') {
        cacheKey = options.key(...args);
      } else {
        cacheKey = `${options.key}:${JSON.stringify(args)}`;
      }

      return this.cache.getOrFetch(
        cacheKey,
        options.ttl,
        () => original.apply(this, args),
        options.tags ?? []
      );
    };
  };
}