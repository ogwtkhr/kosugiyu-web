import { window } from '@/util/window';

const ua = window.navigator.userAgent.toLowerCase();

export const isSafari = (): boolean => !!(ua.match(/safari/) && !ua.match(/chrome|chromium/));
