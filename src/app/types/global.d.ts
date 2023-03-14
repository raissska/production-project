declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare global {
    const __IS_DEV__: boolean;
    const __API__: string;
}

export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
