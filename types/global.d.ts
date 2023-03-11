declare type Recordable<T = any> = Record<string, T>

declare namespace Table {
	interface Search {
		label: string
		prop: string
		type: string
		defaultValue?: string | number | boolean | any[],//初始化的默认参数
		clearable?: boolean
		placeholder?: string
		options?: Children[]
		defaultName?: {
			label: string
			value: string
		} //支持option字段[label,value]的替换
		config?: Object
	}
	interface Column {
		type?: 'index' | 'selection'
		label?: string
		prop?: string
		slot?: string
		width?: number
		align?: 'center' | 'left' | 'right'
		fixed?: 'left' | 'right'
		render?: (scope) => any
	}
	interface Page {
		current: number
		limit: number
		total: number
	}
}

interface Pageable {
	current: number
	limit: number
}

// children
interface Children {
	label: string
	value: string | number
	children?: Children[]
}
// 接口返回数据格式
interface ApiRes<T> {
	code: number
	message: string
	data: T
}

// navTabs数据格式
interface NavTabsItem {
	title: string
	name: string
	path: string
}

// 菜单列表
interface MenuItem {

	id?: number
	pid: number //父id
	name: string //别名
	component: string //匹配前端异步路由
	title: string //菜单名称
	sort: number | undefined
	icon: string
	hidden: 0 | 1 //状态0显示1隐藏
	alwaysShow: 0 | 1 //单子菜单是否一直显示父目录、1显示
	auth: string[] //权限标识
	children: MenuItem[]
}

// dataList数据格式
interface DataList<T> {
	limit: number
	page: number
	total: number
	data: T[]
}

// page数据格式
interface Pages {
	current: number
	limit: number
	total?: number
}
