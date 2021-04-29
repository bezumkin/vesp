import _ from 'lodash'
import {Config, findEnv, loadEnv} from '@vesp/frontend'

Config.ssr = false
Config.srcDir = __dirname
Config.buildDir = '.nuxt/admin'
Config.generate = {
  dir: 'dist/admin',
  exclude: [/^\//],
}

const env = loadEnv(findEnv('../'))
Config.axios.baseURL = env.API_URL || '/api/'
Config.head.title = env.APP_NAME || 'Vesp Framework'

Config.modules = [...Config.modules, ...['@vesp/frontend', '@nuxtjs/auth-next']]

Config.router = _.merge(Config.router, {
  base: '/admin/',
  middleware: ['auth'],
})

Config.fontawesome = _.merge(Config.fontawesome, {
  icons: {
    solid: _.union(Config.fontawesome.icons.solid, ['faUsers', 'faArrowLeft', 'faSignOutAlt']),
  },
})

// Specify vueI18n config as a function for smooth development
Config.i18n.vueI18n = '@/lexicons/index.js'

Config.bootstrapVue = _.merge(Config.bootstrapVue, {
  componentPlugins: _.union(Config.bootstrapVue.componentPlugins, [
    'ImagePlugin',
    'FormCheckboxPlugin',
    'FormTagsPlugin',
    'DropdownPlugin',
    'ListGroupPlugin',
  ]),
})

export default Config
