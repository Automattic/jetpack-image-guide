import { type Writable, type Readable } from './facade.ts';
import { MeasurableImage } from '../MeasurableImage.ts';
import type { Dimensions, Weight } from '../MeasurableImage.ts';
/** Own per-image measurements, source tracking and the weight cache outside reducer state. */
export declare class MeasurableImageStore {
    readonly fileSize: Writable<Dimensions>;
    readonly fileWeight: Writable<Weight>;
    readonly sizeOnPage: Writable<Dimensions>;
    readonly potentialSavings: Readable<number | null>;
    readonly expectedSize: Readable<Dimensions>;
    readonly oversizedRatio: Readable<number>;
    readonly url: Writable<string>;
    readonly loading: Writable<boolean>;
    readonly id: string;
    private static nextId;
    readonly image: MeasurableImage;
    readonly node: MeasurableImage['node'];
    private weightMap;
    private currentSrc;
    constructor(measurableImage: MeasurableImage);
    private fact;
    /** Read current image facts and derived measurements without activating fetching. */
    getSnapshot(): {
        expectedSize: Dimensions;
        oversizedRatio: number;
        potentialSavings: number;
        fileSize: Dimensions;
        fileWeight: Weight;
        sizeOnPage: Dimensions;
        url: string;
        loading: boolean;
    };
    /** Fetch the current source's weight when a measurement consumer becomes active. */
    activate(): void;
    updateDimensions(): Promise<void>;
    private updateFileDimensions;
    private maybeUpdateWeight;
}
