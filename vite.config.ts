import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import setupExtend from 'vite-plugin-vue-setup-extend'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	return {
		plugins: [
			vue(),
			setupExtend(), //setup name使用
			createHtmlPlugin({
				inject: {
					data: {
						title: loadEnv(mode, process.cwd()).VITE_GLOB_TITLE
					}
				}
			}),
			AutoImport({
				imports: ['vue', 'vue-router', 'pinia'],
				resolvers: [
					// 自动导入图标组件
					IconsResolver({
						prefix: 'Icon'
					})
				],
				// 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
				dts: resolve(__dirname, 'types/auto-imports.d.ts')
			}),
			Components({
				// 自动导入自定义组件
				dirs: ['src/components'],
				resolvers: [
					// 自动注册图标组件
					IconsResolver({
						enabledCollections: ['ep']
					})
				],
				// 组件的有效文件扩展名
				extensions: ['vue'],
				dts: resolve(__dirname, 'types/components.d.ts')
			}),
			Icons({
				autoInstall: true
			}),
			createSvgIconsPlugin({
				// 指定需要缓存的图标文件夹
				iconDirs: [resolve(__dirname, 'src/assets/svg')],
				// 指定symbolId格式
				symbolId: 'icon-[dir]-[name]'
			}),
			viteMockServe({
				mockPath: 'mock',
				localEnabled: command === 'serve',
				prodEnabled: command === 'serve',
				//  这样可以控制关闭mock的时候不让mock打包到最终代码内
				injectCode: `import { setupProdMockServer } from 'mock';setupProdMockServer();`
			})
		],
		server: {
			open: true,
			host: '0.0.0.0',
			port: 9527
		},
		esbuild: {},
		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},
		base: './',
		build: {
			target: 'es2015',
			cssTarget: 'chrome80',
			reportCompressedSize: false,
			chunkSizeWarningLimit: 2000
		}
	}
})
