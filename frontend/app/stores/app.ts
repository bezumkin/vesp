import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', () => {
  const login = ref(false)

  return {login}
})
