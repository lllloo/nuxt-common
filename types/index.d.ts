
type Parameters<T extends (...args: unknown) => unknown> = T extends (...args: infer P) => unknown ? P : never;