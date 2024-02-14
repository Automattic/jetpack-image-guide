import { MeasurableImageStore } from './stores/MeasurableImageStore.js';
import type { FetchFn, MeasurableImage } from './MeasurableImage.js';
/**
 * Set up a listener to initialize stuff on window load.
 *
 * @param {Function} fetchFn - An optional custom function to use when fetching the URL weights.
 */
export declare function setupLoadListener(fetchFn?: FetchFn): void;
/**
 * This gets a little tricky because of the various layout positions
 * the images can be in.
 *
 * For example, images can be positioned with static, absolute, fixed, etc.
 * But on top of that, they can be a part of a parent that has that positioning.
 * And to make things even more complex, they can change dynamically, for example in a slider.
 *
 * This function attempts to attach the Svelte Components to the DOM in a non-destructive way.
 *
 * @param {MeasurableImage[]} measuredImages - The images to attach the guides to.
 * @return {MeasurableImageStore[]} The stores for the attached images.
 */
export declare function attachGuides(measuredImages: MeasurableImage[]): MeasurableImageStore[];
