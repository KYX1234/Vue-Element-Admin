import echarts from '@/utils/echarts'
import { useDebounceFn } from '@vueuse/core'
import { useAppStore } from '@/store'

export const useEcharts = (elRef: HTMLDivElement, options: echarts.EChartsCoreOption) => {
	let myChart: echarts.ECharts | null = null
	const appStore = useAppStore()
	const initCharts = (theme: 'dark' | 'default' = 'default') => {
		const el = unref(elRef)
		myChart = echarts.init(el, theme)
	}
	const setOptions = (updateOptions: echarts.EChartsCoreOption = options) => {
		myChart && myChart.setOption(updateOptions)
	}
	const resize = useDebounceFn(() => {
		myChart && myChart.resize()
	}, 200)

	// 初始化执行
	initCharts()
	setOptions()

	// 暗黑适配
	watch(
		() => appStore.isDark,
		() => {
			if (myChart) {
				myChart.dispose()
				initCharts(appStore.isDark ? 'dark' : 'default')
				const newOption = Object.assign(
					options,
					appStore.isDark && { backgroundColor: 'transparent' }
				)
				setOptions(newOption)
			}
		},
		{ immediate: true }
	)

	window.addEventListener('resize', resize)

	onBeforeUnmount(() => {
		if (!myChart) return
		window.removeEventListener('resize', resize)
		myChart.dispose()
	})

	// 暴露更新函数
	return {
		setOptions
	}
}
