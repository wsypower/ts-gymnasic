/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 20:52:18
 * @LastEditTime: 2023-03-27 20:52:22
 * @LastEditors: wsy
 */

type Last<T> = T extends [...unknown[], infer L] ? L : never

export type { Last }
