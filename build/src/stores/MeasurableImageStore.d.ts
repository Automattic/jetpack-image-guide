import { type Writable, type Readable } from './facade.ts';
import { MeasurableImage } from '../MeasurableImage.ts';
import type { Dimensions, Weight } from '../MeasurableImage.ts';
/** Keep image nodes, source tracking and the weight cache outside reducer state. */
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
    private consumers;
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
    /** Acquire weight measurements until the returned idempotent release is called. */
    acquire(): () => void;
    updateDimensions(): Promise<void>;
    private updateFileDimensions;
    private maybeUpdateWeight;
}
