import { Writable } from 'svelte/store';
declare const store: {
    readonly active: "Active";
    readonly paused: "Paused";
};
type State = keyof typeof store;
type CyclableStore = Writable<State> & {
    cycle: () => void;
};
export declare const guideState: CyclableStore;
export declare const guideLabel: import("svelte/store").Readable<"Active" | "Paused">;
export {};
