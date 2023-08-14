import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import en from './lang/en'
import ja from './lang/ja'
import zh from './lang/zh'

const messages = {
  en,
  ja,
  zh,
}

const i18n = createI18n({
  locale: 'zh',
  messages,
})

export function useI18n() {
  return {
  }
}

export function setI18n(app: App) {
  app.use(i18n)
}
