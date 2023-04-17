/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-17 19:44:03
 * @LastEditTime: 2023-04-17 19:45:11
 * @LastEditors: wsy
 */
type Test<T> = T extends boolean ? 'Y' : 'N'
type TestResult = Test<number | true>
