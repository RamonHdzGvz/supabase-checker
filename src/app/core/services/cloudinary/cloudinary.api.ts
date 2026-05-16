import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({ providedIn: 'root' })
export class CloudinaryApi {
  private readonly baseUrl = `${environment.cloudinaryUrl}`;

  /**
  * Sube una imagen al container especificado
  */
  async uploadImage(
    cloudName: string,
    formData: FormData
  ): Promise<any> {
    const res = await fetch(
      `${this.baseUrl}/${cloudName}/image/upload`,
      { method: 'POST', body: formData }
    );

    if (!res.ok) throw new Error('Cloudinary upload failed');
    return res.json();
  }
}
