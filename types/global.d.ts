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

// dataList数据格式
interface DataList<T> {
	limit: number
	page: number
	total: number
	data: T[]
}

// page数据格式
interface Pages{
	current: number,
	limit: number,
	total?: number
}