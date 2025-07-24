export default {
  project: 'Vesp',
  greetings: {
    title: 'Herzlich willkommen!',
    message: 'Wählen Sie einen Menüpunkt, um loszulegen',
  },
  security: {
    username: 'Nutzername',
    password: 'Passwort',
    login: 'Anmeldung',
    logout: 'Ausloggen',
    greetings: 'Hello!',
    goodbye: 'Auf Wiedersehen...',
    profile: 'Profil',
    success_update_message: 'Dein Profil wurde erfolgreich aktualisiert!',
  },
  models: {
    user: {
      title_one: 'Nutzer',
      title_many: 'Benutzer',
      id: 'Id',
      username: 'Nutzername',
      fullname: 'Vollständiger Name',
      password: 'Passwort',
      email: 'Email',
      active: 'Aktiv',
      role: 'Rolle',
      created_at: 'Erstellungsdatum',
      active_at: 'Active At',
    },
    user_role: {
      title_one: 'Benutzer-Rolle',
      title_many: 'Benutzerrollen',
      id: 'Id',
      title: 'Titel',
      scope: 'Umfang',
      add_scope: 'Bereiche hinzufügen',
      users: 'Benutzer',
    },
  },
  pages: {
    admin: {
      title: 'Admin',
      users: 'Benutzer',
      user_roles: 'Rollen',
    },
    user: {
      title: 'Benutzer',
      profile: 'Profil',
    },
  },
  success: {
    login: 'Willkommen!',
    logout: 'Auf Wiedersehen...',
    profile: 'Das Profil wurde erfolgreich gespeichert',
  },
  errors: {
    security: {
      inactive: 'Ihr Konto ist nicht aktiv',
      wrong: 'Benutzername oder Passwort falsch',
    },
  },
}
