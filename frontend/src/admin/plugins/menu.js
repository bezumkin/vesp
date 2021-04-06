export default [
  {
    name: 'users',
    title: 'models.user.title_many',
    scope: 'users',
    children: [
      {
        name: 'users-roles',
        title: 'models.user_role.title_many',
        scope: 'users',
      },
    ],
  },
]
