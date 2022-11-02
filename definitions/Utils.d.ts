declare type Nullable<T> = T | null | undefined
declare type Singular<T extends string> = T extends `${infer actualString}s` ? actualString : never;
