import { MeasurableImageStore } from './stores/MeasurableImageStore';
/**
 * Image properties sent to tracks.
 */
type ImageProperties = {
    severity: 'red' | 'yellow' | 'green';
    oversized_ratio: number;
    file_weight: number;
    file_width: number;
    file_height: number;
    size_on_page_width: number;
    size_on_page_height: number;
    expected_width: number;
    expected_height: number;
    potential_savings: number | null;
    image_url: string;
};
export type TracksCallback = (event: string, props: {
    [key: string]: string | number;
}) => void;
export default class ImageGuideAnalytics {
    static trackingComplete: boolean;
    static tracksCallback: TracksCallback;
    static setTracksCallback(callback: any): void;
    /**
     * Track the image guide analytics for a single image.
     *
     * @param { MeasurableImageStore } imageStore - The image store to track.
     * @return { Promise< ImageProperties > } Promise that resolves with the properties of the image.
     */
    static trackImageOutcome(imageStore: MeasurableImageStore): Promise<ImageProperties>;
    /**
     * Track events to record the outcome of the image guide for the current page.
     *
     * @param {MeasurableImageStore[]} imageStores - The image stores to track.
     */
    static trackPage(imageStores: MeasurableImageStore[]): Promise<void>;
    /**
     * Track the state of the UI when the user loads a page.
     */
    static trackInitialState(): void;
    /**
     * Track the state of the UI when the user changes it.
     */
    static trackUIStateChange(): void;
}
export {};
