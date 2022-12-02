// 菜单列表
export interface MenuInfo {
  id?: number
  pid?: number //父id
  name: string
  alias:string //别名
  url?:string //匹配前端异步路由
  sort: number
  icon:string 
  show: 0 | 1 //状态0隐藏1显示
  type: 1 | 2 | 3 //1菜单2页面3按钮
  children:MenuInfo[]
}