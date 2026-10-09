import { MeasurableImage } from '../MeasurableImage.ts';
/** Keep image nodes, source tracking and the weight cache outside reducer state. */
export declare class MeasurableImageStore {
    readonly id: string;
    private static nextId;
    readonly image: MeasurableImage;
    readonly node: MeasurableImage['node'];
    private weightMap;
    private currentSrc;
    private consumers;
    constructor(measurableImage: MeasurableImage);
    /** Read current image facts and derived measurements without activating fetching. */
    getSnapshot(): {
        expectedSize: import("../MeasurableImage.ts").Dimensions;
        oversizedRatio: number;
        potentialSavings: number;
        fileSize: import("../MeasurableImage.ts").Dimensions;
        fileWeight: import("../MeasurableImage.ts").Weight;
        sizeOnPage: import("../MeasurableImage.ts").Dimensions;
        url: string;
        loading: boolean;
    };
    /** Acquire weight measurements until the returned idempotent release is called. */
    acquire(): () => void;
    updateDimensions(): Promise<void>;
    private updateFileDimensions;
    private maybeUpdateWeight;
}
