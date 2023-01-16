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
interface MenuInfo {
  id?: number
  pid?: number //父id
  name: string //别名
  component:string //匹配前端异步路由
  title?:string //菜单名称
  sort: number
  icon:string 
  show: 0 | 1 //状态0隐藏1显示
  type: 1 | 2 | 3 //1菜单2页面3按钮
  alwaysShow:0|1 //单子菜单是否一直显示父目录、1显示
  children:MenuInfo[]
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