/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 19:58:05
 * @LastEditTime: 2023-03-27 20:07:54
 * @LastEditors: wsy
 */
import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
