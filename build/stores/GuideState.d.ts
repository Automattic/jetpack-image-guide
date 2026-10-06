export declare const guideState: {
    subscribe: (callback: (value: "active" | "paused") => void, invalidate?: () => void) => () => void;
    set: (value: "active" | "paused") => void;
    update: (updater: (value: "active" | "paused") => "active" | "paused") => void;
    cycle: () => unknown;
};
export declare const guideLabel: import("./facade.ts").Readable<string>;
