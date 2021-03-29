import {hasScope} from '@vesp/frontend/utils'
import menuItems from '@/plugins/menu'

export const state = () => ({
  menu: menuItems,
})

export const mutations = {
  menu(state, payload) {
    state.menu = payload
  },
}

export const getters = {
  menu({menu, auth}) {
    const filtered = []
    if (auth.loggedIn) {
      for (let item of menu) {
        item = JSON.parse(JSON.stringify(item))
        if (item.children) {
          item.children = item.children.filter((child) => !child.scope || hasScope(child.scope, auth))
        }
        if ((!item.scope || hasScope(item.scope, auth)) && (item.children === undefined || item.children.length)) {
          filtered.push(item)
        }
      }
    }
    return filtered
  },
}
