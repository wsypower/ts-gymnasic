/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 20:02:06
 * @LastEditTime: 2023-03-27 20:31:42
 * @LastEditors: wsy
 */
import type { First } from '@/First'

test('First', () => {
  expectTypeOf<First<[1, 2, 3]>>().toBeNumber()
  expectTypeOf<First<['1', 2, 3]>>().toString()
  expectTypeOf<First<[]>>().toBeNever()
  expectTypeOf<First<any[]>>().toBeNever()
})
