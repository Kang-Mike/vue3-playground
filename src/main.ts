import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setI18n } from './locales'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
setI18n(app)

app.mount('#app')
