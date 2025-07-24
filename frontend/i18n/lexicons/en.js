export default {
  project: 'Vesp',
  greetings: {
    title: 'Welcome!',
    message: 'Select a menu item to get started',
  },
  security: {
    username: 'Username',
    password: 'Password',
    login: 'Login',
    logout: 'Logout',
    greetings: 'Hello!',
    goodbye: 'Bye, bye...',
    profile: 'Profile',
    success_update_message: 'Your profile has been updated successfully!',
  },
  models: {
    user: {
      title_one: 'User',
      title_many: 'Users',
      id: 'Id',
      username: 'Username',
      fullname: 'Fullname',
      password: 'Password',
      email: 'Email',
      active: 'Active',
      role: 'Role',
      created_at: 'Created At',
      active_at: 'Active At',
    },
    user_role: {
      title_one: 'User Role',
      title_many: 'Users Roles',
      id: 'Id',
      title: 'Title',
      scope: 'Scope',
      add_scope: 'Add scopes',
      users: 'Users',
    },
  },
  pages: {
    admin: {
      title: 'Admin',
      users: 'Users',
      user_roles: 'Roles',
    },
    user: {
      title: 'User',
      profile: 'Profile',
    },
  },
  success: {
    login: 'Welcome!',
    logout: 'Goodbye...',
    profile: 'The profile has been saved successfully',
  },
  errors: {
    security: {
      inactive: 'Your account is not active',
      wrong: 'Wrong username or password',
    },
  },
}
