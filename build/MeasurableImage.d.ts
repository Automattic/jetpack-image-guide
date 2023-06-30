export type SourceCallbackFn = (node: HTMLElement) => string | null;
export type Dimensions = {
    width: number;
    height: number;
};
export type Weight = {
    weight: number;
};
export type FetchFn = (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
/**
 * A class that represents a DOM Element that
 * has an image that should be measured and
 * provides measurement utilities.
 */
export declare class MeasurableImage {
    readonly node: HTMLElement | HTMLImageElement;
    private getURLCallback;
    fetch: FetchFn;
    /**
     * Constructor.
     *
     * @param {HTMLElement | HTMLImageElement} node -  The DOM Element that contains the image.
     * @param {SourceCallbackFn} getURL             -  A function that takes in the node and returns the URL of the image.
     * @param {FetchFn} fetchFn                     -  A function that fetches a URL and returns a Promise.
     */
    constructor(node: HTMLElement | HTMLImageElement, getURL: SourceCallbackFn, fetchFn?: FetchFn | null);
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
    /**
     * Checks if the image is too small and should be ignored
     *
     * @returns {boolean} - if the image is smaller than 65 pixels width and height return false
     */
    isImageBig(): Promise<boolean>;
}
