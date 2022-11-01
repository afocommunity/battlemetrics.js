declare type PartialNullable<T, N> = {
  [K in keyof T]: T[K]
}
