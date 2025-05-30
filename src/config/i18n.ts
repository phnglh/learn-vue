import { createI18n } from 'vue-i18n'
import en from '../locales/en/common.json'
import ja from '@/locales/ja/common.json'
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'ja',
  messages: {
    en,
    ja,
  },
})
export default i18n
