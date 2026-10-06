import { type Dimensions, type Weight } from '../MeasurableImage.ts';
declare const labels: {
    readonly active: 'Active';
    readonly paused: 'Paused';
};
export type GuideState = keyof typeof labels;
export type ImageFacts = {
    fileSize: Dimensions;
    fileWeight: Weight;
    sizeOnPage: Dimensions;
    url: string;
    loading: boolean;
};
type State = {
    guideState: GuideState;
    images: Record<string, ImageFacts>;
    imageChange: {
        id?: string;
        revision: number;
    };
    revisions: Record<string, Partial<Record<keyof ImageFacts, number>>>;
};
declare const actions: {
    setGuideState: (value: GuideState) => {
        type: 'SET_GUIDE_STATE';
        value: "active" | "paused";
    };
    cycleGuideState: () => {
        type: 'CYCLE_GUIDE_STATE';
    };
    setImage: (id: string, facts: ImageFacts) => {
        type: 'SET_IMAGE';
        id: string;
        facts: ImageFacts;
    };
    updateImage: (id: string, facts: Partial<ImageFacts>) => {
        type: 'UPDATE_IMAGE';
        id: string;
        facts: Partial<ImageFacts>;
    };
};
export declare const store: import("@wordpress/data").StoreDescriptor<import("@wordpress/data").ReduxStoreConfig<unknown, {
    setGuideState: (value: GuideState) => {
        type: 'SET_GUIDE_STATE';
        value: "active" | "paused";
    };
    cycleGuideState: () => {
        type: 'CYCLE_GUIDE_STATE';
    };
    setImage: (id: string, facts: ImageFacts) => {
        type: 'SET_IMAGE';
        id: string;
        facts: ImageFacts;
    };
    updateImage: (id: string, facts: Partial<ImageFacts>) => {
        type: 'UPDATE_IMAGE';
        id: string;
        facts: Partial<ImageFacts>;
    };
}, {
    getGuideState: (state: State) => "active" | "paused";
    getGuideLabel: (state: State) => "Active" | "Paused";
    getImageFacts: (state: State, id: string) => ImageFacts;
    getImageChange: (state: State) => {
        id?: string;
        revision: number;
    };
    getImageRevision: (state: State, id: string, key: keyof ImageFacts) => number;
    getExpectedSize: ((state: State, id: string) => {
        width: number;
        height: number;
    }) & import("@wordpress/data").EnhancedSelector;
    getOversizedRatio: ((state: State, id: string) => number) & import("@wordpress/data").EnhancedSelector;
    getPotentialSavings: ((state: State, id: string) => number) & import("@wordpress/data").EnhancedSelector;
}>>;
export declare const selectors: {
    getGuideState: () => GuideState;
    getGuideLabel: () => string;
    getImageFacts: (id: string) => ImageFacts;
    getImageChange: () => State['imageChange'];
    getImageRevision: (id: string, key: keyof ImageFacts) => number;
    getExpectedSize: (id: string) => Dimensions;
    getOversizedRatio: (id: string) => number;
    getPotentialSavings: (id: string) => number | null;
};
export declare const commands: {
    [K in keyof typeof actions]: (...args: Parameters<(typeof actions)[K]>) => unknown;
};
export declare function subscribeToFacts(listener: () => void, id?: string): () => void;
export {};
