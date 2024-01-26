// https://nuxt.com/docs/api/configuration/nuxt-config

import type {NuxtConfig} from '@nuxt/schema'

const config: NuxtConfig = {
  telemetry: false,
  srcDir: 'src/',
  css: ['~/assets/scss/index.scss'],
  devtools: {enabled: false},
  vite: {
    server: {
      hmr: {port: 3001},
    },
    css: {
      preprocessorOptions: {
        scss: {additionalData: '@use "@/assets/scss/_variables.scss" as *;'},
      },
    },
  },
  routeRules: {
    '/admin/**': {ssr: false},
    '/user/**': {ssr: false},
  },
  runtimeConfig: {
    public: {
      TZ: process.env.TZ || 'Europe/Moscow',
      SITE_URL: process.env.SITE_URL || '127.0.0.1',
      API_URL: process.env.API_URL || '/api/',
      JWT_EXPIRE: process.env.JWT_EXPIRE || '2592000',
    },
  },
  modules: ['@vesp/frontend'],
  vesp: {
    icons: {
      solid: ['faUser', 'faPowerOff', 'faRightToBracket'],
    },
  },
  i18n: {
    langDir: 'lexicons',
    locales: [
      {code: 'ru', name: 'Русский', file: 'ru.js', iso: 'ru-RU'},
      {code: 'en', name: 'English', file: 'en.js', iso: 'en-GB'},
      {code: 'de', name: 'Deutsch', file: 'de.js', iso: 'de-DE'},
      {code: 'nl', name: 'Nederlands', file: 'nl.js', iso: 'nl-NL'},
      {code: 'fr', name: 'Français', file: 'fr.js', iso: 'fr-FR'},
    ],
  },
}

if (process.env.NODE_ENV === 'development') {
  config.modules?.push('@nuxtjs/eslint-module', '@nuxtjs/stylelint-module')
  // @ts-ignore
  config.eslint = {
    lintOnStart: false,
  }
  // @ts-ignore
  config.stylelint = {
    lintOnStart: false,
  }
}

export default defineNuxtConfig(config)
