import { MeasurableImageStore } from './stores/MeasurableImageStore.ts';
import type { FetchFn, MeasurableImage } from './MeasurableImage.ts';
/**
 * Set up a listener to initialize stuff on window load.
 *
 * @param {Function} fetchFn - An optional custom function to use when fetching the URL weights.
 */
export declare function setupLoadListener(fetchFn?: FetchFn): void;
/**
 * Attach guides once per image without replacing page content.
 *
 * @param {MeasurableImage[]} measuredImages - The images to attach the guides to.
 * @return {MeasurableImageStore[]} The stores for newly attached images.
 */
export declare function attachGuides(measuredImages: MeasurableImage[]): MeasurableImageStore[];
