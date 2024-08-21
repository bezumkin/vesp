// https://nuxt.com/docs/api/configuration/nuxt-config

import type {NuxtConfig} from '@nuxt/schema'

const enabledLocales = (process.env.LOCALES || 'ru,en,de,nl,fr').split(',')
const locales = [
  {code: 'ru', name: 'Русский', file: 'lexicons/ru.js', language: 'ru-RU'},
  {code: 'en', name: 'English', file: 'lexicons/en.js', language: 'en-GB'},
  {code: 'de', name: 'Deutsch', file: 'lexicons/de.js', language: 'de-DE'},
  {code: 'nl', name: 'Nederlands', file: 'lexicons/nl.js', language: 'nl-NL'},
  {code: 'fr', name: 'Français', file: 'lexicons/fr.js', language: 'fr-FR'},
].filter((i) => enabledLocales.includes(i.code))

const config: NuxtConfig = {
  telemetry: false,
  ssr: true,
  srcDir: 'src/',
  css: ['~/assets/scss/index.scss'],
  devtools: {enabled: false},
  vite: {
    server: {
      hmr: {port: 3001},
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
          quietDeps: true,
        },
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
    locales,
    defaultLocale: locales[0].code,
    detectBrowserLanguage: {
      fallbackLocale: locales[0].code,
    },
  },
  compatibilityDate: '2024-08-20',
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
