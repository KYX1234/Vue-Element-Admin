import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import setupExtend from 'vite-plugin-vue-setup-extend'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		setupExtend(), //setup name使用
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'],
			resolvers: [
				ElementPlusResolver(),
								// 自动导入图标组件
								IconsResolver({
									prefix: 'Icon'
								})
			],
			// 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
			dts: resolve(__dirname, './types/auto-imports.d.ts')
		}),
		Components({
			resolvers: [
				ElementPlusResolver(),
								// 自动注册图标组件
								IconsResolver({
									enabledCollections: ['ep']
								})
			],
			dts: resolve(__dirname, './types/components.d.ts')
		}),
    Icons({
      autoInstall: true,
    })
	],
	server: {
		open: true,
		host: '0.0.0.0',
		port: 9527
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	base: '/my-demo/'
})
