import { SignaturesApi } from '@core/services/supabase/signatures.api';
import { optimizeImage } from '@core/utils/images/image-optimizer';
import { CloudinaryApi } from './cloudinary.api';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CloudinaryService {
  constructor(
    private signaturesApi: SignaturesApi,
    private cloudinaryApi: CloudinaryApi
  ) { }

  /**
   * Sube una imagen de usuario (portrait)
   */
  async uploadUserPortrait(file: File): Promise<string> {
    const optimizedFile = await optimizeImage(file);

    const signature = await this.signaturesApi.getCloudinarySignature();

    const formData = new FormData();
    formData.append('file', optimizedFile);
    formData.append('api_key', signature.apiKey);
    formData.append('timestamp', String(signature.timestamp));
    formData.append('signature', signature.signature);
    formData.append('folder', signature.folder);

    const result = await this.cloudinaryApi.uploadImage(
      signature.cloudName,
      formData
    );

    return result.secure_url;
  }
}
