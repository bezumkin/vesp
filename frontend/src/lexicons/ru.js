export default {
  project: 'Vesp',
  greetings: {
    title: 'Добро пожаловать!',
    message: 'Выберите пункт меню для начала работы',
  },
  security: {
    username: 'Логин',
    password: 'Пароль',
    login: 'Вход',
    logout: 'Выход',
    greetings: 'Привет!',
    goodbye: 'Пока, пока...',
    profile: 'Профиль',
    success_update_message: 'Ваш профиль был успешно обновлён!',
  },
  models: {
    user: {
      title_one: 'Пользователь',
      title_many: 'Пользователи',
      id: 'Id',
      username: 'Логин',
      fullname: 'Полное имя',
      password: 'Пароль',
      email: 'Email',
      active: 'Активно',
      role: 'Группа',
      created_at: 'Дата создания',
    },
    user_role: {
      title_one: 'Группа',
      title_many: 'Группы',
      id: 'Id',
      title: 'Название',
      scope: 'Разрешения',
      add_scope: 'Добавить',
      users: 'Пользователи',
    },
  },
  pages: {
    admin: {
      title: 'Админка',
      users: 'Пользователи',
      user_roles: 'Группы',
    },
    user: {
      title: 'Пользователь',
      profile: 'Профиль',
    },
  },
  success: {
    login: 'Добро пожаловать!',
    logout: 'До свидания...',
    profile: 'Профиль успешно сохранён',
  },
  errors: {
    security: {
      inactive: 'Ваш аккаунт неактивен',
      wrong: 'Неправильное имя или пароль',
    },
  },
}
