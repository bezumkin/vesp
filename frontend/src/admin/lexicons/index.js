import _ from 'lodash'
import vespDe from '@vesp/frontend/lexicons/de'
import vespEn from '@vesp/frontend/lexicons/en'
import vespRu from '@vesp/frontend/lexicons/ru'
import localDe from './de'
import localEn from './en'
import localRu from './ru'

export default () => {
  return {
    fallbackLocale: 'en',
    messages: {
      de: _.merge(vespDe, localDe),
      en: _.merge(vespEn, localEn),
      ru: _.merge(vespRu, localRu),
    },
  }
}
