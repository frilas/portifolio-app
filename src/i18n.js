import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import moment from 'moment'
import {initReactI18next} from 'react-i18next'

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'pt-BR',
    load: 'currentOnly',

    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false, // react already safes from xss
      format,
    },
  })

function format(value, pattern) {
  if (value instanceof Date) return moment(value).format(pattern)
  return value
}

export default i18n
