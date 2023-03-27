/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 20:00:32
 * @LastEditTime: 2023-03-27 20:52:10
 * @LastEditors: wsy
 */
type First<T> = T extends [infer F, ...unknown[]] ? F : never

export type { First }
