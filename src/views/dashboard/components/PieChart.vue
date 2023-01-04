<template>
	<div ref="pieEcharts" style="width: 100%; height: 300px"></div>
</template>

<script lang="ts" setup>
import { useEcharts } from '@/hooks/useEcharts'
const pieEcharts = ref<HTMLDivElement | null>(null)
const options = {
	title: {
		subtext: '爱好分析',
		left: 'left'
	},
	tooltip: {
		trigger: 'item'
	},
	legend: {
		bottom: '3%'
	},
	series: [
		{
			name: '爱好分析占比',
			type: 'pie',
			radius: '50%',
			data: [
				{ value: 1048, name: '糖醋排骨' },
				{ value: 735, name: '柚子' },
				{ value: 580, name: '阳光玫瑰' },
				{ value: 484, name: '豌豆糯米饭' },
				{ value: 300, name: '草莓' }
			],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}
	]
}
onMounted(() => {
	useEcharts(pieEcharts.value as HTMLDivElement, options)
})
</script>

<style lang="scss" scoped></style>
