/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-28 20:07:09
 * @LastEditTime: 2023-03-28 20:08:19
 * @LastEditors: wsy
 */
type TrimRight<T extends string> =
  T extends `${infer R}${' ' | '\n' | '\r'}` ? TrimRight<R> : T

type TrimLeft<T extends string> =
  T extends `${' ' | '\n' | '\r'}${infer R}` ? TrimLeft<R> : T

type Trim<T extends string> = TrimRight<TrimLeft<T>>

export type { Trim, TrimLeft, TrimRight }
