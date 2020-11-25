export const rgba = (hex: string, alpha = 1): string => {
  let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  let c = null;
  if (r) {
    c = r.slice(1, 4).map((x: string) => parseInt(x, 16));
  }
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (r) {
    c = r.slice(1, 4).map((x) => 0x11 * parseInt(x, 16));
  }
  if (!c) {
    return '';
  }
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`;
};
