type Subtract<Num1 extends number, Num2 extends number> =
    BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest]
      ? Rest['length']
      : never

type BuildArray<
    Length extends number, Ele = unknown, Arr extends unknown[] = [],
> = Arr['length'] extends Length
  ? Arr
  : BuildArray<Length, Ele, [...Arr, Ele]>

  type ResultSub = Subtract<5, 3>
