import { Injectable } from "@angular/core";
import { CacheStorageService } from "./cache-storage.service";

interface MemoryEntry<T> {
  value: T;
  expires: number;
}

@Injectable({ providedIn: "root" })
export class SmartCacheService {
  private memory = new Map<string, MemoryEntry<any>>();
  private pending = new Map<string, Promise<any>>();
  private tagIndex = new Map<string, Set<string>>();

  constructor(private storage: CacheStorageService) { }

  async getOrFetch<T>(
    key: string,
    ttl: number,
    fetcher: () => Promise<T>,
    tags: string[] = []
  ): Promise<T> {
    const now = Date.now();

    /* ---------------- MEMORY CACHE ---------------- */
    const memoryEntry = this.memory.get(key);
    if (memoryEntry) {
      if (memoryEntry.expires === Infinity || memoryEntry.expires > now) {
        console.log(`[Cache] MEMORY HIT → ${key}`);
        return memoryEntry.value;
      }
      console.log(`[Cache] MEMORY EXPIRED → ${key}`);
      this.memory.delete(key);
      this.storage.remove(key);
    }

    /* ---------------- STORAGE CACHE ---------------- */
    const stored = this.storage.get<T>(key);
    if (stored) {
      console.log(`[Cache] STORAGE HIT → ${key}`);
      const expires = ttl === Infinity ? Infinity : now + ttl;
      this.memory.set(key, {
        value: stored,
        expires
      });
      return stored;
    }

    /* ---------------- PENDING REQUEST ---------------- */
    if (this.pending.has(key)) {
      console.log(`[Cache] PENDING HIT → ${key}`);
      return this.pending.get(key)!;
    }

    /* ---------------- FETCH ---------------- */
    console.log(`[Cache] FETCH → ${key}`);
    const request = fetcher()
      .then(result => {
        const expires = ttl === Infinity ? Infinity : Date.now() + ttl;
        this.memory.set(key, {
          value: result,
          expires
        });
        this.storage.set(key, result, ttl);
        /* ---------- TAG INDEX ---------- */
        for (const tag of tags) {
          if (!this.tagIndex.has(tag)) {
            this.tagIndex.set(tag, new Set());
          }
          this.tagIndex.get(tag)!.add(key);
        }
        console.log(`[Cache] STORE → ${key}`);
        this.pending.delete(key);
        return result;
      })
      .catch(err => {
        this.pending.delete(key);
        console.error(`[Cache] FETCH ERROR → ${key}`, err);
        throw err;
      });
    this.pending.set(key, request);
    return request;
  }

  /* ---------------- INVALIDATE KEY ---------------- */
  invalidate(key: string) {
    console.log(`[Cache] INVALIDATE → ${key}`);
    this.memory.delete(key);
    this.storage.remove(key);
  }

  /* ---------------- INVALIDATE TAG ---------------- */
  invalidateTag(tag: string) {
    const keys = this.tagIndex.get(tag);
    if (!keys) return;
    console.log(`[Cache] INVALIDATE TAG → ${tag}`);
    for (const key of keys) {
      this.memory.delete(key);
      this.storage.remove(key);
    }
    this.tagIndex.delete(tag);
  }
}