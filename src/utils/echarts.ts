import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'

import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	ToolboxComponent,
	TransformComponent
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
	BarChart,
	LineChart,
	PieChart,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	ToolboxComponent,
	TransformComponent,
	LabelLayout,
	UniversalTransition,
	SVGRenderer
])

export default echarts;