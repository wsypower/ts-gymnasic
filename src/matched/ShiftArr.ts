type ShiftArr<T extends unknown[]> =
  T extends []
    ? []
    : T extends [unknown, ...infer R]
      ? R
      : never
