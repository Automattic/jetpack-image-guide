export type Readable<T> = {
    subscribe: (callback: (value: T) => void, invalidate?: () => void) => () => void;
};
export type Writable<T> = Readable<T> & {
    set: (value: T) => void;
    update: (updater: (value: T) => T) => void;
};
export declare function observe<T>(read: () => T, callback: (value: T) => void, revision?: () => number, invalidate?: () => void, imageId?: string): () => void;
export declare function readable<T>(read: () => T, start?: () => void | (() => void), revision?: () => number, imageId?: string): Readable<T>;
export declare function writable<T>(read: () => T, set: (value: T) => void, start?: () => void | (() => void), revision?: () => number, imageId?: string): Writable<T>;
