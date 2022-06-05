import {merge, union} from 'lodash'
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

Config.modules = union(Config.modules, ['@vesp/frontend', '@nuxtjs/auth-next'])

Config.router = merge(Config.router, {
  base: '/admin/',
  middleware: ['auth'],
})

// Specify vueI18n config as a function for smooth development
Config.i18n.vueI18n = '@/lexicons/index.js'

Config.fontawesome = merge(Config.fontawesome, {
  addCss: false,
  icons: {
    solid: union(Config.fontawesome.icons.solid, ['faUsers', 'faArrowLeft', 'faSignOutAlt']),
  },
})

Config.bootstrapVue = merge(Config.bootstrapVue, {
  componentPlugins: union(Config.bootstrapVue.componentPlugins, [
    'ImagePlugin',
    'FormCheckboxPlugin',
    'FormTagsPlugin',
    'DropdownPlugin',
    'ListGroupPlugin',
  ]),
})

export default Config
