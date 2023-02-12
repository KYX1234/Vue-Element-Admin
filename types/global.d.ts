declare type Recordable<T = any> = Record<string, T>

declare namespace Table {
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
