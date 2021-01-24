import { ssrWindow } from 'ssr-window';

export const window = (ssrWindow as unknown) as Window;
export default window;
