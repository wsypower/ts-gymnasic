/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 20:02:06
 * @LastEditTime: 2023-03-28 19:27:42
 * @LastEditors: wsy
 */
import type { First } from '@/matched/First'
import type { Last } from '@/matched/Last'
import type { PopArr } from '@/matched/PopArr'
describe('Last', () => {
  test('First', () => {
    expectTypeOf<First<[1, 2, 3]>>().toBeNumber()
    expectTypeOf<First<['1', 2, 3]>>().toBeString()
    expectTypeOf<First<[]>>().toBeNever()
    expectTypeOf<First<any[]>>().toBeNever()
  })

  test('Last', () => {
    expectTypeOf<Last<[1, 2, '3']>>().toBeString()
    expectTypeOf<Last<['1', 2, 3]>>().toBeNumber()
    expectTypeOf<Last<[]>>().toBeNever()
    expectTypeOf<Last<any[]>>().toBeNever()
  })
})

describe('Array API', () => {
  test('pop', () => {
    expectTypeOf<PopArr<[1, 2, 3]>>().toEqualTypeOf<[1, 2]>()
    expectTypeOf<PopArr<[1, 2, 3]>>().not.toEqualTypeOf<[3]>()
    expectTypeOf<PopArr<[]>>().toEqualTypeOf<[]>()
  })
})
