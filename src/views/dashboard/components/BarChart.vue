<template>
	<div ref="barEcharts" style="width: 100%; height: 300px"></div>
</template>

<script lang="ts" setup>
import { useEcharts } from '@/hooks/useEcharts'
const barEcharts = ref<HTMLDivElement | null>(null)
const options = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			lineStyle: {
				width: 1,
				color: '#019680'
			}
		}
	},
	grid: { left: '1%', right: '1%', top: '3%', bottom: 0, containLabel: true },
	xAxis: {
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	},
	yAxis: {
		type: 'value',
		max: 8000,
		splitNumber: 4
	},
	series: [
		{
			data: [1111, 2222, 3333, 5000, 2800, 3600, 3200, 2000, 3700, 5500, 6000, 4500],
			type: 'bar',
			barMaxWidth: 80
		}
	]
}
onMounted(() => {
	useEcharts(barEcharts.value as HTMLDivElement, options)
})
</script>

<style lang="scss" scoped></style>
