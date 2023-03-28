/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-28 19:58:53
 * @LastEditTime: 2023-03-28 20:06:54
 * @LastEditors: wsy
 */
type Replace<T extends string, from extends string, to extends string> =
  T extends `${infer L}${from}${infer R}`
    ? `${L}${to}${R}`
    : T

type ReplaceDeep<T, from extends string, to extends string> =
  T extends `${infer L}${from}${infer R}`
    ? ReplaceDeep<`${L}${to}${R}`, from, to>
    : T
export type { Replace, ReplaceDeep }
