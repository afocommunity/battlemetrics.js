export declare type Nullable<T> = T | null | undefined
export declare type Singular<T extends string> = T extends `${infer actualString}s` ? actualString : never;
