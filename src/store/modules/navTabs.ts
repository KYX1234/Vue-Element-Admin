import { defineStore } from 'pinia'

const defaultTabs: NavTabsItem = { title: '首页', path: '/dashboard' }

const whiteList = ['/redirect', '/login'];

export const useNavTabsStore =defineStore({
  id: 'navTabs',
  state:() =>({
    tagList:[defaultTabs]
  }),
  getters: {

  },
  actions: {
    //add
    addTagItem(item: NavTabsItem) {
      if (whiteList.includes(item.path)) return
      const flag = this.tagList.some((i) => i.path === item.path)
      console.log(flag)
      if (flag) return
      this.tagList.push(item)
    },
    //remove
  }
})