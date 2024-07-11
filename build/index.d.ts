import { MeasurableImage, type Dimensions, type FetchFn, type Weight } from './MeasurableImage.js';
import { type TracksCallback } from './analytics.js';
import { getMeasurableImages } from './find-image-elements.js';
import AdminBarToggle from './ui/AdminBarToggle.svelte';
export { MeasurableImage, getMeasurableImages };
export type { Weight, Dimensions };
type ImageGuideUIOptions = {
    href: string;
    tracksCallback: TracksCallback;
    fetchFunction: FetchFn;
};
/**
 * Set up the Image Guide UI in the given target parent.
 *
 * @param {string}   target              - The parent element to mount the UI in.
 * @param {object}   args                - The arguments to pass to the UI.
 * @param {string}   args.href           - The URL to the image guide.
 * @param {Function} args.tracksCallback - The callback to call when tracking an event.
 * @param {Function} args.fetchFunction  - The function to use to fetch the image weight.
 * @return {object} The Svelte component instance.
 */
export declare function setupImageGuideUI(target: HTMLElement, { href, tracksCallback, fetchFunction }: ImageGuideUIOptions): AdminBarToggle<{
    href: string;
    tracksCallback: TracksCallback;
}, any, any>;
