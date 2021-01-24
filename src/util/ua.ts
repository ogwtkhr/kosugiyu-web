const ua = navigator.userAgent.toLowerCase();

export const isSafari = (): boolean => !!(ua.match(/safari/) && !ua.match(/chrome|chromium/));
