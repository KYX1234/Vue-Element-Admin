import { defineStore } from 'pinia'

export const useAppStore =defineStore({
  id: 'app',
  state:() =>({
    isCollapse: localStorage.getItem('sidebarStatus')||true
  }),
  getters: {

  },
  actions: {

  }
})