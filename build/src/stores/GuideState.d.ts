export declare const guideState: {
    cycle: () => unknown;
    subscribe: (callback: (value: "active" | "paused") => void, invalidate?: () => void) => () => void;
    set: (value: "active" | "paused") => void;
    update: (updater: (value: "active" | "paused") => "active" | "paused") => void;
};
export declare const guideLabel: import("./facade.ts").Readable<string>;
