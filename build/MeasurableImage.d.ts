export type SourceCallbackFn = (node: HTMLElement) => string | null;
export type Dimensions = {
    width: number;
    height: number;
};
export type Weight = {
    weight: number;
};
/**
 * A class that represents a DOM Element that
 * has an image that should be measured and
 * provides measurement utilities.
 */
export declare class MeasurableImage {
    readonly node: HTMLElement | HTMLImageElement;
    private getURLCallback;
    /**
     * Constructor.
     *
     * @param {HTMLElement | HTMLImageElement} node -  The DOM Element that contains the image.
     * @param {SourceCallbackFn} getURL             -  A function that takes in the node and returns the URL of the image.
     */
    constructor(node: HTMLElement | HTMLImageElement, getURL: SourceCallbackFn);
    getURL(): string;
    getSizeOnPage(): {
        width: number;
        height: number;
    };
    getFileSize(url: string): Promise<{
        width: number;
        height: number;
        weight: number;
    }>;
    getPotentialSavings(fileSize: Dimensions & Weight, sizeOnPage: Dimensions): number;
    /**
     * To get the expected size of the image,
     * the image size on page has to be multiplied by the device pixel ratio.
     *
     * @param {Dimensions} sizeOnPage - The size of the image on the page.
     * @returns {object} - The expected size of the image.
     */
    getExpectedSize(sizeOnPage: Dimensions): {
        width: number;
        height: number;
    };
    getOversizedRatio(fileSize: Dimensions, sizeOnPage: Dimensions): number;
    /**
     * Fetches the weight of the image at the given URL,
     * by reading the Content-Length header.
     *
     * @param {string} url -  string The URL of the image.
     */
    private fetchFileWeight;
    /**
     * Fetches the dimensions of the image at the given URL,
     * This creates a new image element and loads the image.
     *
     * @param {string} url -  image url
     */
    private fetchFileDimensions;
}
