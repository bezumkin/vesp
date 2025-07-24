// https://nuxt.com/docs/api/configuration/nuxt-config

import type {NuxtConfig} from '@nuxt/schema'
import type {LocaleObject} from '@nuxtjs/i18n'

const enabledLocales = (process.env.LOCALES || 'ru,en,de,nl,fr').split(',')
const allLocales: LocaleObject[] = [
  {code: 'ru', name: 'Русский', file: 'ru.js', language: 'ru-RU'},
  {code: 'en', name: 'English', file: 'en.js', language: 'en-GB'},
  {code: 'de', name: 'Deutsch', file: 'de.js', language: 'de-DE'},
  {code: 'nl', name: 'Nederlands', file: 'nl.js', language: 'nl-NL'},
  {code: 'fr', name: 'Français', file: 'fr.js', language: 'fr-FR'},
]
const locales = allLocales.filter((i) => enabledLocales.includes(i.code))

const config: NuxtConfig = {
  telemetry: false,
  ssr: true,
  nitro: {
    // experimental: {websocket: true},
    // storage: {cache: {driver: 'redis', host: 'redis'}},
    // devStorage: {cache: {driver: 'redis', host: 'redis'}},
  },
  css: ['~/assets/scss/index.scss'],
  devtools: {enabled: false},
  vite: {
    server: {
      // allowedHosts: ['vesp.test'],
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
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    layoutTransition: {name: 'page', mode: 'out-in'},
    head: {
      title: process.env.SITE_NAME,
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0',
      meta: [{name: 'msapplication-config', content: '/favicons/browserconfig.xml'}],
      link: [
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png'},
        {rel: 'icon', sizes: '32x32', href: '/favicons/favicon-32x32.png', type: 'image/png'},
        {rel: 'icon', sizes: '16x16', href: '/favicons/favicon-16x16.png', type: 'image/png'},
        {rel: 'manifest', href: '/favicons/site.webmanifest'},
        {rel: 'shortcut icon', href: '/favicons/favicon.ico'},
      ],
    },
  },
  modules: ['@vesp/frontend'],
  vesp: {
    icons: {
      solid: ['user', 'power-off', 'right-to-bracket'],
    },
  },
  i18n: {
    locales,
    defaultLocale: locales[0]?.code || 'en',
    detectBrowserLanguage: {
      fallbackLocale: locales[0]?.code || 'en',
    },
    langDir: 'lexicons',
  },
  compatibilityDate: '2025-07-24',
}

if (process.env.NODE_ENV === 'development') {
  config.modules?.push('@nuxt/eslint', '@nuxtjs/stylelint-module')
  // @ts-ignore
  config.eslint = {
    checker: true,
    config: {
      stylistic: {
        semi: false,
        arrowParens: true,
        quotes: 'single',
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
        blockSpacing: false,
      },
    },
  }
  // @ts-ignore
  config.stylelint = {
    lintOnStart: false,
  }
}

// @ts-ignore
export default defineNuxtConfig(config)
