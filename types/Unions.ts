/**
 * Equivalent of the `Pick<T, U>` generic for literal unions
 */
export type PickUnion<T, U extends T> = T extends U ? T : never

/**
 * Equivalent of the `Omit` generic for literal unions
 */
export type OmitUnion<T, U extends T> = T extends U ? never : T