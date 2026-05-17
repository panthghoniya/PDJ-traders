// ============================================================
//  Cloudinary Configuration & Helper — PDJ Trade Connect
//
//  Cloudinary URL format:
//  https://res.cloudinary.com/{cloudName}/image/upload/{transforms}/{publicId}
//
//  Kaise use kare:
//    import { cld } from '../config/cloudinary';
//    <img src={cld('factory')} />
//    <img src={cld('factory', { width: 800, quality: 'auto' })} />
// ============================================================

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your_cloud_name';
const BASE_URL   = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Build a Cloudinary URL with optional transformations.
 *
 * @param {string} publicId   - Image name as uploaded on Cloudinary (e.g. 'pdj/factory')
 * @param {object} opts       - Optional transformation options
 * @param {number} opts.width - Resize width in px
 * @param {number} opts.height- Resize height in px
 * @param {string} opts.crop  - Crop mode: 'fill' | 'fit' | 'scale' | 'thumb'
 * @param {string|number} opts.quality - 'auto' or 1-100
 * @param {string} opts.format - 'auto' | 'webp' | 'jpg' | 'png'
 * @returns {string} Full Cloudinary URL
 *
 * Example:
 *   cld('pdj/factory')
 *   → https://res.cloudinary.com/your_cloud/image/upload/q_auto,f_auto/pdj/factory
 *
 *   cld('pdj/factory', { width: 1200, crop: 'fill', quality: 'auto' })
 *   → https://res.cloudinary.com/your_cloud/image/upload/w_1200,c_fill,q_auto,f_auto/pdj/factory
 */
export const cld = (publicId, opts = {}) => {
  const transforms = [];

  if (opts.width)   transforms.push(`w_${opts.width}`);
  if (opts.height)  transforms.push(`h_${opts.height}`);
  if (opts.crop)    transforms.push(`c_${opts.crop}`);

  // Always apply quality auto + format auto for best performance (unless overridden)
  transforms.push(`q_${opts.quality || 'auto'}`);
  transforms.push(`f_${opts.format  || 'auto'}`);

  const transformStr = transforms.join(',');
  return `${BASE_URL}/${transformStr}/${publicId}`;
};

/**
 * Preset helpers — ready-to-use sizes
 */
export const cldHero     = (id) => cld(id, { width: 1920, crop: 'fill' });   // Hero banners
export const cldCard     = (id) => cld(id, { width: 600,  crop: 'fill' });   // Product cards
export const cldThumb    = (id) => cld(id, { width: 200,  crop: 'thumb' });  // Thumbnails
export const cldFull     = (id) => cld(id);                                  // Full original

export default cld;
