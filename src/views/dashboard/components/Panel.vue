<template>
	<div>
		<el-row>
			<el-col class="box-wrap" :md="6" :sm="12">
				<el-card class="box-card" shadow="never">
					<template #header>
						<el-row justify="space-between">
							<span>访问量</span>
							<el-tag>月</el-tag>
						</el-row>
					</template>
					<div class="card-content">
						<div class="number">16428</div>
						<div class="content">
							<el-row justify="space-between">
								<span>
									日同比 3.3%
									<el-icon style="vertical-align: middle" color="var(--el-color-warning)">
										<i-ep-caretBottom />
									</el-icon>
								</span>
								<span>
									周同比 16.7%
									<el-icon style="vertical-align: middle" color="var(--el-color-success)">
										<i-ep-caretTop />
									</el-icon>
								</span>
							</el-row>
						</div>
						<el-divider></el-divider>
						<el-row justify="space-between">
							<span>总访问量</span>
							<span>36万</span>
						</el-row>
					</div>
				</el-card>
			</el-col>
			<el-col class="box-wrap" :md="6" :sm="12">
				<el-card class="box-card" shadow="never">
					<template #header>
						<el-row justify="space-between">
							<span>用户数</span>
							<el-tag type="success">日</el-tag>
						</el-row>
					</template>
					<div class="card-content">
						<div class="number">187</div>
						<div class="content">昨日新增 117</div>
						<el-divider />
						<el-row justify="space-between">
							<span>总访问量</span>
							<span>36000人</span>
						</el-row>
					</div>
				</el-card>
			</el-col>
			<el-col class="box-wrap" :md="6" :sm="12">
				<el-card class="box-card" shadow="never">
					<template #header>
						<el-row justify="space-between">
							<span>销售额</span>
							<el-tag type="warning">月</el-tag>
						</el-row>
					</template>
					<div class="card-content">
						<div class="number">71983</div>
						<div class="content">
							<el-progress style="width: 100%" :percentage="53" />
						</div>
						<el-divider />
						<el-row justify="space-between">
							<span>总销售额</span>
							<span>55万</span>
						</el-row>
					</div>
				</el-card>
			</el-col>
			<el-col class="box-wrap" :md="6" :sm="12">
				<el-card class="box-card" shadow="never">
					<template #header>
						<el-row justify="space-between">
							<span>订单量</span>
							<el-tag type="danger">周</el-tag>
						</el-row>
					</template>
					<div class="card-content">
						<div class="number">1400</div>
						<div class="content">
							<span>
								待处理
								<b style="color: var(--el-color-warning)">56</b>
							</span>
						</div>
						<el-divider />
						<el-row justify="space-between">
							<span>转化率</span>
							<span>25%</span>
						</el-row>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col class="box-wrap" :md="3" :sm="12" v-for="(item, index) in cardList" :key="index">
				<el-card class="box-card" shadow="never">
					<el-row justify="center">
						<div style="text-align: center">
							<el-icon>
								<svg-icon :class-name="item.value" size="35" :color="item.color"></svg-icon>
							</el-icon>
							<div>{{ item.label }}</div>
						</div>
					</el-row>
				</el-card>
			</el-col>
		</el-row>
		<el-card>
			<div ref="echarts" style="width: 100%; height: 200px"></div>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
import { useEcharts } from '@/hooks/useEcharts'

const cardList = [
	{ label: '用户', value: 'user', color: '#69c0ff' },
	{ label: '订单', value: 'order', color: '#ffa277' },
	{ label: '分析', value: 'analysis', color: '#333333' },
	{ label: '礼物', value: 'gift', color: '#b37feb' },
	{ label: '购物', value: 'shop', color: '#3271ae' },
	{ label: '标签', value: 'tag', color: '#d12920' },
	{ label: '消息', value: 'email', color: '#67c23a' },
	{ label: '表单', value: 'form', color: '#ffc069' }
]
const echarts = ref<HTMLDivElement | null>(null)
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
	useEcharts(echarts.value as HTMLDivElement, options)
})
</script>

<style lang="scss" scoped>
.el-row {
	margin-left: -10px;
	.box-wrap {
		padding-bottom: 10px;
		padding-left: 10px;
		.card-content {
			.number {
				height: 40px;
				font-size: 25px;
			}
			.content {
				line-height: 30px;
				height: 30px;
			}
			.el-divider {
				margin: 20px 0 15px 0;
			}
		}
	}
}
</style>
