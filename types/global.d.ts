// 接口返回数据格式
interface ApiRes<T> {
	code: number
	message: string
	data: T
	success: boolean
}

// navTabs数据格式
interface NavTabsItem{
	title: string,
	path:string
}
