/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-28 20:20:22
 * @LastEditTime: 2023-03-28 20:22:47
 * @LastEditors: wsy
 */
type GetParameters<T extends (...arg: any) => any> =
  T extends (...args: infer P) => any ? P : never

export type { GetParameters }
