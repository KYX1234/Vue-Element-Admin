import { defineStore } from 'pinia'

export const useAppStore =defineStore({
  id: 'app',
  state:() =>({
    isCollapse: JSON.parse(localStorage.getItem('isCollapse') as string)||false
  }),
  getters: {

  },
  actions: {

  }
})