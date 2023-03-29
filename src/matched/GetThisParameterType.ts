/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-29 19:20:27
 * @LastEditTime: 2023-03-29 19:22:52
 * @LastEditors: wsy
 */
type GetThisParameterType<T extends (...arg: any) => any> =
  T extends (this: infer U, ...args: any[]) => any ? U : never

export type { GetThisParameterType }
