import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

const pinia = createPinia()
// const app = createApp(App).use(pinia).mount('#app')
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
