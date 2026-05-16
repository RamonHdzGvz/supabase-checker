export interface ImageOptimizeOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number; // 0 - 1
  format?: 'image/jpeg' | 'image/webp';
}

/**
 * Optimiza una imagen para subida (resize + compresión)
 */
export async function optimizeImage(
  file: File,
  options: ImageOptimizeOptions = {}
): Promise<File> {
  const {
    maxWidth = 600,
    maxHeight = 600,
    quality = 0.8,
    format = 'image/jpeg',
  } = options;

  const imageBitmap = await createImageBitmap(file);

  const scale = Math.min(
    maxWidth / imageBitmap.width,
    maxHeight / imageBitmap.height,
    1
  );

  const width = Math.round(imageBitmap.width * scale);
  const height = Math.round(imageBitmap.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  ctx.drawImage(imageBitmap, 0, 0, width, height);

  const blob: Blob = await new Promise((resolve) =>
    canvas.toBlob(
      (b) => resolve(b as Blob),
      format,
      quality
    )
  );

  const extension = format === 'image/webp' ? 'webp' : 'jpg';
  const filename = file.name.replace(/\.\w+$/, `.${extension}`);

  return new File([blob], filename, { type: format });
}
