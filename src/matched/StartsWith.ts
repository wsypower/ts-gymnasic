/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-28 19:52:09
 * @LastEditTime: 2023-03-28 19:54:27
 * @LastEditors: wsy
 */
type StartsWith<T extends string, Prefix extends string> =
  T extends `${Prefix}${string}` ? true : false

export type { StartsWith }
