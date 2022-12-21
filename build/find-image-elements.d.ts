import { MeasurableImage } from './MeasurableImage';
/**
 * Get elements that either are image tags or have a background image.
 *
 * @param  nodes -  A list of nodes to filter
 */
export declare function findMeasurableElements(nodes: Element[]): HTMLElement[] | HTMLImageElement[];
/**
 * Get the current image source from a node.
 *
 * @param  node -  HTMLImageElement
 */
export declare function imageTagSource(node: HTMLImageElement): string;
/**
 * Get the background image URL from a node.
 *
 * @param  node -  HTMLElement
 */
export declare function backgroundImageSource(node: HTMLElement): string;
/**
 * Create MeasurableImage objects from a list of nodes
 * and remove any nodes that can't be measured.
 *
 * @param  domNodes -  A list of nodes to measure
 */
export declare function getMeasurableImages(domNodes: Element[]): MeasurableImage[];
