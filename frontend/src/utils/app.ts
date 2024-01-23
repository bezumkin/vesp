export function getAdminSections() {
  const items = [
    {scope: 'users/get', title: 'users', route: 'admin-users'},
    {scope: 'roles/get', title: 'user_roles', route: 'admin-user-roles'},
  ]

  return items.filter((i) => hasScope(i.scope))
}
