/**
 * A class that represents a DOM Element that
 * has an image that should be measured and
 * provides measurement utilities.
 */
export class MeasurableImage {
    node;
    getURLCallback;
    /**
     * Constructor.
     *
     * @param {HTMLElement | HTMLImageElement} node -  The DOM Element that contains the image.
     * @param {SourceCallbackFn} getURL             -  A function that takes in the node and returns the URL of the image.
     */
    constructor(node, getURL) {
        this.node = node;
        this.getURLCallback = getURL;
    }
    getURL() {
        return this.getURLCallback(this.node);
    }
    getSizeOnPage() {
        const { width, height } = this.node.getBoundingClientRect();
        return {
            width: Math.round(width),
            height: Math.round(height),
        };
    }
    async getFileSize(url) {
        const [weight, { width, height }] = await Promise.all([
            this.fetchFileWeight(url),
            this.fetchFileDimensions(url),
        ]);
        return {
            width,
            height,
            weight,
        };
    }
    getPotentialSavings(fileSize, sizeOnPage) {
        const oversizedRatio = this.getOversizedRatio(fileSize, sizeOnPage);
        if (oversizedRatio <= 1) {
            return null;
        }
        return Math.round(fileSize.weight - fileSize.weight / oversizedRatio);
    }
    /**
     * To get the expected size of the image,
     * the image size on page has to be multiplied by the device pixel ratio.
     *
     * @param {Dimensions} sizeOnPage - The size of the image on the page.
     * @returns {Object} - The expected size of the image.
     */
    getExpectedSize(sizeOnPage) {
        const dpr = window.devicePixelRatio || 1;
        return {
            width: Math.round(sizeOnPage.width * dpr),
            height: Math.round(sizeOnPage.height * dpr),
        };
    }
    getOversizedRatio(fileSize, sizeOnPage) {
        const { width, height } = this.getExpectedSize(sizeOnPage);
        return (fileSize.width * fileSize.height) / (width * height);
    }
    /**
     * Fetches the weight of the image at the given URL,
     * by reading the Content-Length header.
     *
     * @param {string} url -  string The URL of the image.
     */
    async fetchFileWeight(url) {
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        if (!response.url) {
            // eslint-disable-next-line no-console
            console.log(`Can't get image size for ${url} likely due to a CORS error.`);
            return -1;
        }
        const size = response.headers.get('content-length');
        if (size) {
            return parseInt(size, 10) / 1024;
        }
        return -1;
    }
    /**
     * Fetches the dimensions of the image at the given URL,
     * This creates a new image element and loads the image.
     *
     * @param {string} url -  image url
     */
    async fetchFileDimensions(url) {
        const img = new Image();
        img.src = url;
        return new Promise(resolve => {
            img.onload = () => {
                resolve({ width: Math.round(img.width), height: Math.round(img.height) });
            };
            img.onerror = () => {
                resolve({ width: -1, height: -1 });
            };
        });
    }
}
//# sourceMappingURL=MeasurableImage.js.map