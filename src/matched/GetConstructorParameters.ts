/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-31 18:46:19
 * @LastEditTime: 2023-03-31 18:47:28
 * @LastEditors: wsy
 */
type GetConstructorParameters<T extends { new(...arg: any): any }> =
  T extends { new(...arg: infer ParametersType): any } ? ParametersType : any

export type { GetConstructorParameters }
