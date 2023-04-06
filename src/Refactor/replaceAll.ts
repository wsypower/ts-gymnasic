type ReplaceAll<
  Str extends string,
  From extends string,
  To extends string,
  > = Str extends `${infer L}${From}${infer R}`
    ? ReplaceAll<`${L}${To}${R}`, From, To>
    : Str

    type Result = ReplaceAll<'aaabbbcccaaa', 'a', '-'>
