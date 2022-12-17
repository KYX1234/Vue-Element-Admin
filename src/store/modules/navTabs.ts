import { defineStore } from 'pinia'
import router from '@/router'

const defaultTabs: NavTabsItem = { title: '首页', path: '/dashboard' }

const whiteList = ['/redirect', '/login','/dashboard']

export const useNavTabsStore = defineStore({
	id: 'navTabs',
	state: () => ({
		tabsList: [defaultTabs]
	}),
	getters: {},
	actions: {
		//add
		addTabsItem(item: NavTabsItem) {
			if (whiteList.includes(item.path)) return
			const flag = this.tabsList.some(i => i.path === item.path)
			if (flag) return
			this.tabsList.push(item)
		},

		//remove
		removeTabsItem(key: string) {
			const index = this.tabsList.findIndex(item => item.path === key)
			if (index >= 0) {
				const isActive = key === router.currentRoute.value.path
				this.tabsList.splice(index, 1)
				if (isActive) {
					router.push(this.tabsList[this.tabsList.length - 1].path)
				}
			}
    },

    // closeOther
    colseTabsOther(key: string) {
      this.tabsList = this.tabsList.filter(item => {
          return whiteList.includes(item.path)||item.path === key
			});
    },

    // clearAll
    clearTabsAll() {
      this.tabsList = [defaultTabs]
      router.push(defaultTabs.path)
    },
	}
})
