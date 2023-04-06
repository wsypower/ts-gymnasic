/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-06 19:39:57
 * @LastEditTime: 2023-04-06 19:43:01
 * @LastEditors: wsy
 */
type DeepReadonly<Obj extends Record<string, any>> =
    Obj extends any
      ? {
          readonly [Key in keyof Obj]:
          Obj[Key] extends Record<string, any>
            ? Obj[Key] extends Function
              ? Obj[Key]
              : DeepReadonly<Obj[Key]>
            : Obj[Key]
        }
      : never

interface obj {
  a: {
    b: {
      c: {
        f: () => 'dong'
        d: {
          e: {
            guang: string
          }
        }
      }
    }
  }
}

type ResultDeepReadonly = DeepReadonly<obj>
