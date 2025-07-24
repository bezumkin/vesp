export default {
  project: 'Vesp',
  greetings: {
    title: 'Bienvenue!',
    message: 'Sélectionnez un élément de menu pour commencer',
  },
  security: {
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    login: 'Connexion',
    logout: 'Se déconnecter',
    greetings: 'Bonjour!',
    goodbye: 'Bye, bye...',
    profile: 'Le profil',
    success_update_message: 'Votre profil a été mis à jour avec succés!',
  },
  models: {
    user: {
      title_one: 'Utilisateur',
      title_many: 'Utilisateurs',
      id: 'Id',
      username: 'Nom d\'utilisateur',
      fullname: 'Nom et prénom',
      password: 'Mot de passe',
      email: 'E-mail',
      active: 'Actif',
      created_at: 'Date de création',
      active_at: 'War aktiv',
    },
    user_role: {
      title_one: 'Rôle d\'utilisateur',
      title_many: 'Rôles des utilisateurs',
      id: 'Id',
      title: 'Titre',
      scope: 'Portée',
      add_scope: 'Ajouter des étendues',
      users: 'Utilisateurs',
    },
  },
  pages: {
    admin: {
      title: 'Administrateur',
      users: 'Utilisateurs',
      user_roles: 'Les rôles',
    },
    user: {
      title: 'Utilisateur',
      profile: 'Le profil',
    },
  },
  success: {
    login: 'Bienvenue!',
    logout: 'Au revoir...',
    profile: 'Le profil a été enregistré avec succès',
  },
  errors: {
    security: {
      inactive: 'Votre compte n\'est pas actif',
      wrong: 'Nom d\'utilisateur ou mot de passe erroné',
    },
  },
}
