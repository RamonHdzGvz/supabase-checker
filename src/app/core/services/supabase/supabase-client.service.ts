import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '@environment';

@Injectable({ providedIn: 'root' })
export class SupabaseClientService {
  private client: SupabaseClient;
  private accessToken: string | null = null;

  constructor() {
    this.client = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          lock: async (_name, _acquireTimeout, fn) => {
            // Ejecuta directamente sin usar navigator.locks
            return await fn();
          }
        }
      }
    );

    this.client.auth.onAuthStateChange((_event, session) => {
      this.accessToken = session?.access_token ?? null;
    });
  }

  get db(): SupabaseClient {
    return this.client;
  }

  getClient() {
    return this.client;
  }

  getAccessToken() {
    return this.accessToken;
  }
}