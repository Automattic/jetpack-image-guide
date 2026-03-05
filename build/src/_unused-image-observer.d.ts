/**
 *
 *
 * ! MutationObserver is currently not used.
 * ! This needs significant improvement before we can use it.
 *
 *
 */
type ImageCallback = (images: HTMLElement[]) => void;
/**
 *
 * @param callback
 */
export declare function createImageObserver(callback: ImageCallback): Promise<MutationObserver>;
export {};
