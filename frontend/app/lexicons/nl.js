export default {
  project: 'Vesp',
  greetings: {
    title: 'Welkom!',
    message: 'Selecteer een menu-item om aan de slag te gaan',
  },
  security: {
    username: 'Gebruikersnaam',
    password: 'Wachtwoord',
    login: 'Log in',
    logout: 'Uitloggen',
    greetings: 'Hallo!',
    goodbye: 'Tot ziens...',
    profile: 'Profiel',
    success_update_message: 'Uw profiel is succesvol bijgewerkt!',
  },
  models: {
    user: {
      title_one: 'Gebruiker',
      title_many: 'Gebruikers',
      id: 'Id',
      username: 'Gebruikersnaam',
      fullname: 'Voor-en achternaam',
      password: 'Password',
      email: 'E-mail',
      active: 'Actief',
      role: 'Rol',
      created_at: 'Aanmaakdatum',
    },
    user_role: {
      title_one: 'Gebruikersrol',
      title_many: 'Rollen van gebruikers',
      id: 'Id',
      title: 'Titel',
      scope: 'Domein',
      add_scope: 'Bereiken toevoegen',
      users: 'Gebruikers',
    },
  },
  pages: {
    admin: {
      title: 'Beheerder',
      users: 'Gebruikers',
      user_roles: 'Rollen',
    },
    user: {
      title: 'Gebruiker',
      profile: 'Profiel',
    },
  },
  success: {
    login: 'Welkom!',
    logout: 'Tot ziens...',
    profile: 'Het profiel is succesvol opgeslagen',
  },
  errors: {
    security: {
      inactive: 'Uw account is niet actief',
      wrong: 'Verkeerde gebruikersnaam of wachtwoord',
    },
  },
}
