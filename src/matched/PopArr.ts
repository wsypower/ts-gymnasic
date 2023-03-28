type PopArr<T extends unknown[]> =
  T extends []
    ? []
    : T extends [...infer U, unknown]
      ? U
      : never

export type { PopArr }
