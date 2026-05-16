import { Injectable, inject } from '@angular/core';
import { environment } from '@environment';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase = inject(SupabaseClientService);
  private readonly baseUrl = `${environment.supabaseUrl}/functions/v1`;

  get db() {
    return this.supabase.db;
  }

  async callFunction<T>(
    endpoint: string,
    options: {
      method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
      body?: string | File | Blob | ArrayBuffer | FormData | ReadableStream<Uint8Array<ArrayBufferLike>> | Record<string, any> | undefined;
    } = {}
  ): Promise<T> {

    const response =
      await this.supabase
        .getClient()
        .functions.invoke(endpoint, {
          method: options.method ?? 'GET',
          body: options.body,
        });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.data as T;
  }

  async callFunctionBlob(
    endpoint: string,
    options: {
      method?: 'GET' | 'POST';
      body?: BodyInit | null;
      requireAuth?: boolean;
    } = {}
  ): Promise<Blob> {

    const headers: Record<string, string> = {
      apikey: environment.supabaseKey,
    };

    if (options.requireAuth) {
      const token = this.supabase.getAccessToken();
      if (!token) {
        throw new Error('User not authenticated');
      }
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(
      `${this.baseUrl}/${endpoint}`,
      {
        method: options.method ?? 'POST',
        headers,
        body: options.body ?? null,
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Error ${res.status}`);
    }

    return res.blob();
  }
}
