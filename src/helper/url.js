// src/helpers/url.js
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path) {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}