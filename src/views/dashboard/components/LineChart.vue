<template>
	<div ref="lineEcharts" style="width: 100%; height: 300px"></div>
</template>

<script lang="ts" setup>
import { useEcharts } from '@/hooks/useEcharts'
const lineEcharts = ref<HTMLDivElement | null>(null)
const options = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['降雨量'],
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value',
		max: 3000
	},
	series: [
		{
			name: '降雨量',
			type: 'line',
			data: [620, 932, 901, 934, 1690, 2630, 2720],
			smooth: true,
			itemStyle: {
					color: '#f56c6c',
					lineStyle: {
						color: '#f56c6c'
					}
			},
			areaStyle: {
				color: '#fdecec'
			}
		}
	]
}
onMounted(() => {
	useEcharts(lineEcharts.value as HTMLDivElement, options)
})
</script>

<style lang="scss" scoped></style>
