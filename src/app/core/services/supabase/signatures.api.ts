import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class SignaturesApi {
  constructor(private supabase: SupabaseService) { }

  /**
   * Obtiene el json de firma con data para Cloudinary
   */
  getCloudinarySignature(): Promise<{
    timestamp: number;
    signature: string;
    apiKey: string;
    cloudName: string;
    folder: string;
  }> {
    return this.supabase.callFunction<{
      timestamp: number;
      signature: string;
      apiKey: string;
      cloudName: string;
      folder: string;
    }>('cloudinary-signature', {
      method: 'POST',
    });
  }
}
