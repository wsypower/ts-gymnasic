type TestLast<T extends string[]> =
    T extends [...infer _, infer Last extends string] ? `这是最后一个：${Last}` : never
