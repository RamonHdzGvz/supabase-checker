import { Injectable } from '@angular/core';

interface CacheEntry<T> {
  value: T;
  expires: number;
}

@Injectable({
  providedIn: 'root',
})
export class CacheStorageService {

  private prefix = 'aclabs_cache_';

  private buildKey(key: string) {
    return `${this.prefix}${key}`;
  }

  set<T>(key: string, value: T, ttl: number): void {
    const storageKey = this.buildKey(key);
    const expires = ttl === Infinity ? Infinity : Date.now() + ttl;
    const entry: CacheEntry<T> = {
      value,
      expires,
    };

    try {
      localStorage.setItem(storageKey, JSON.stringify(entry));
    } catch (err) {
      console.warn('CacheStorageService: localStorage full or blocked', err);
    }
  }

  get<T>(key: string): T | null {
    const storageKey = this.buildKey(key);
    const raw = localStorage.getItem(storageKey);

    if (!raw) return null;

    try {
      const entry: CacheEntry<T> = JSON.parse(raw);
      if (entry.expires !== Infinity && Date.now() > entry.expires) {
        console.log(`[Cache] STORAGE EXPIRED → ${storageKey}`);
        localStorage.removeItem(storageKey);
        return null;
      }
      return entry.value;
    } catch (err) {
      console.warn('CacheStorageService: corrupted cache entry', err);
      localStorage.removeItem(storageKey);
      return null;
    }
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  remove(key: string): void {
    localStorage.removeItem(this.buildKey(key));
  }

  clearNamespace(): void {
    const prefix = this.prefix;
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(prefix)) {
        localStorage.removeItem(key);
      }
    });
  }
}