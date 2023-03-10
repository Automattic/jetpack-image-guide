import { MeasurableImage } from './MeasurableImage';
/**
 * Get elements that either are image tags or have a background image.
 *
 * @param {Element[]} nodes -  A list of nodes to filter
 * @returns {HTMLElement[] | HTMLImageElement[]} - A list of nodes that are either image tags or have a background image.
 */
export declare function findMeasurableElements(nodes: Element[]): HTMLElement[] | HTMLImageElement[];
/**
 * Get the current image source from a node.
 *
 * @param {HTMLImageElement} node -  HTMLImageElement
 * @returns {string | null} - The URL of the image or null if it can't be determined.
 */
export declare function imageTagSource(node: HTMLImageElement): string;
/**
 * Get the background image URL from a node.
 *
 * @param {HTMLImageElement} node - HTMLElement
 * @returns {string | null} - The URL of the image or null if it can't be determined.
 */
export declare function backgroundImageSource(node: HTMLElement): string;
/**
 * Create MeasurableImage objects from a list of nodes
 * and remove any nodes that can't be measured.
 *
 * @param {Element[]} domNodes - A list of nodes to measure
 * @returns {MeasurableImage[]} - A list of MeasurableImage objects.
 */
export declare function getMeasurableImages(domNodes: Element[]): MeasurableImage[];
