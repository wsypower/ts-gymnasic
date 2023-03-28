/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 20:02:06
 * @LastEditTime: 2023-03-28 21:05:00
 * @LastEditors: wsy
 */
import type { First } from '@/matched/First'
import type { Last } from '@/matched/Last'
import type { PopArr } from '@/matched/PopArr'
import type { StartsWith } from '@/matched/StartsWith'
import type { Replace, ReplaceDeep } from '@/matched/Replace'
import type { Trim, TrimLeft, TrimRight } from '@/matched/Trim'
import type { GetParameters } from '@/matched/GetParameters'
import type { GetReturnType } from '@/matched/GetReturnType'
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

  test('ShiftArr', () => {
    expectTypeOf<ShiftArr<[1, 2, 3]>>().toEqualTypeOf<[2, 3]>()
    expectTypeOf<ShiftArr<[1, 2, 3]>>().not.toEqualTypeOf<[1, 2, 3]>()
    expectTypeOf<ShiftArr<[]>>().toEqualTypeOf<[]>()
  })
})

describe('String', () => {
  test('StartsWith', () => {
    expectTypeOf<StartsWith<'abc', 'a'>>().toEqualTypeOf<true>()
    expectTypeOf<StartsWith<'abc', 'b'>>().toEqualTypeOf<false>()
    expectTypeOf<StartsWith<'abc', ''>>().toEqualTypeOf<true>()
    expectTypeOf<StartsWith<'', ''>>().toEqualTypeOf<true>()
  })

  test('Replace', () => {
    expectTypeOf<Replace<'abc', 'a', 'c'>>().toEqualTypeOf<'cbc'>()
    expectTypeOf<Replace<'aabc', 'a', 'c'>>().toEqualTypeOf<'cabc'>()
  })

  test('ReplaceDeep', () => {
    expectTypeOf<ReplaceDeep<'aabc', 'a', 'c'>>().toEqualTypeOf<'ccbc'>()
    expectTypeOf<ReplaceDeep<'acabc', 'a', 'c'>>().toEqualTypeOf<'cccbc'>()
  })

  test('Trim ', () => {
    expectTypeOf<Trim<' abc '>>().toEqualTypeOf<'abc'>()
    expectTypeOf<Trim<' abc'>>().toEqualTypeOf<'abc'>()
    expectTypeOf<Trim<'abc '>>().toEqualTypeOf<'abc'>()
    expectTypeOf<Trim<' abc '>>().not.toEqualTypeOf<' abc '>()
    expectTypeOf<TrimRight<'abc '>>().toEqualTypeOf<'abc'>()
    expectTypeOf<TrimLeft<' abc'>>().toEqualTypeOf<'abc'>()
    expectTypeOf<TrimLeft<'a abc'>>().toEqualTypeOf<'a abc'>()
  })
})

describe('Function', () => {
  test('GetParameters', () => {
    expectTypeOf<GetParameters<(a: number, b: string) => void>>().toEqualTypeOf<[number, string]>()
    expectTypeOf<GetParameters<(a: number, b: string) => void>>().not.toEqualTypeOf<[string, number]>()
    expectTypeOf<GetParameters<() => void>>().toEqualTypeOf<[]>()

    expectTypeOf<Parameters<(a: number, b: string) => void>>().toEqualTypeOf<[number, string]>()
    expectTypeOf<Parameters<(a: number, b: string) => void>>().not.toEqualTypeOf<[string, number]>()
    expectTypeOf<Parameters<() => void>>().toEqualTypeOf<[]>()
  })

  test('GetReturnType', () => {
    expectTypeOf<GetReturnType<(a: number, b: string) => number>>().toBeNumber()
    expectTypeOf<GetReturnType<(a: number, b: string) => number>>().not.toBeString()
    expectTypeOf<GetReturnType<() => void>>().toBeVoid()
    expectTypeOf<GetReturnType<() => undefined>>().toBeUndefined()

    expectTypeOf<ReturnType<(a: number, b: string) => number>>().toBeNumber()
  })
})
