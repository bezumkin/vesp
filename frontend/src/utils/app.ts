import {useAppStore} from '~/stores/app'

export function getAdminSections() {
  const items = [
    {scope: 'users/get', title: 'users', route: 'admin-users'},
    {scope: 'roles/get', title: 'user_roles', route: 'admin-user-roles'},
  ]

  return items.filter((i) => hasScope(i.scope))
}

export function showLogin(show: boolean) {
  useAppStore().login = show
}

export function loginVisible() {
  return useAppStore().login
}
