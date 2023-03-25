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

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
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
				prodEnabled: command !== 'serve',
				//  这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
          import { setupProdMockServer } from '/mock/index.ts';
          setupProdMockServer();`
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
			rollupOptions: {
				output: {
					// https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
					sanitizeFileName(name) {
						const match = DRIVE_LETTER_REGEX.exec(name);
						const driveLetter = match ? match[0] : "";
						// A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
						// Otherwise, avoid them because they can refer to NTFS alternate data streams.
						return (
							driveLetter +
							name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
						);
					},
				},
			},
			outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
			chunkSizeWarningLimit: 1500 // chunk 大小警告的限制（以 kbs 为单位）
    }
	}
})
