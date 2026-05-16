export function componentAsset(
  type: 'atoms' | 'molecules' | 'organisms',
  component: string,
  file: string
) {
  return `assets/${type}/${component}/assets/${file}`;
}