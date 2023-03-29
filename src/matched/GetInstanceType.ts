/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-29 19:38:18
 * @LastEditTime: 2023-03-29 19:38:22
 * @LastEditors: wsy
 */
type GetInstanceType<T extends { new(...arg: any): any }> =
  T extends { new(...arg: any): infer R } ? R : any
