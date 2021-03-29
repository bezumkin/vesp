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
      username: 'Username',
      fullname: 'Fullname',
      password: 'Password',
      email: 'Email',
      active: 'Active',
      role: 'Role',
    },
    user_role: {
      title_one: 'User Role',
      title_many: 'Users Roles',
      title: 'Title',
      scope: 'Scope',
      add_scope: 'Add scopes',
    },
  },
  errors: {
    security: {
      inactive: 'Your account is not active',
      wrong: 'Wrong username or password',
    },
  },
}
