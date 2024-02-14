import { Writable, Readable } from 'svelte/store';
import { MeasurableImage } from '../MeasurableImage.js';
import type { Dimensions, Weight } from '../MeasurableImage.js';
/**
 * Each measurable image has its own set of Svelte stores.
 *
 * This class relies on MeasurableImage to calculate the values
 * and stores them in multiple Svelte stores,
 * so that the dimensions are easily
 * accessible in the components.
 */
export declare class MeasurableImageStore {
    readonly fileSize: Writable<Dimensions & Weight>;
    readonly sizeOnPage: Writable<Dimensions>;
    readonly potentialSavings: Readable<number | null>;
    readonly expectedSize: Readable<Dimensions>;
    readonly oversizedRatio: Readable<number>;
    readonly url: Writable<string>;
    readonly loading: Writable<boolean>;
    readonly image: MeasurableImage;
    readonly node: MeasurableImage['node'];
    private currentSrc;
    constructor(measurableImage: MeasurableImage);
    private deriveOversizedRatio;
    private deriveExpectedSize;
    private derivePotentialSavings;
    updateDimensions(): Promise<void>;
    private maybeUpdateWeight;
}
