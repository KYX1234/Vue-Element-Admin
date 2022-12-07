import { defineStore } from 'pinia'

export const useAppStore =defineStore({
  id: 'app',
  state:() =>({
    isCollapse: localStorage.getItem('sidebarStatus')||false
  }),
  getters: {

  },
  actions: {

  }
})