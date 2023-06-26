import './assets/main.css'

import { createApp } from 'vue'
import { pinia } from './stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

// Setup Icons
import setupIcons from './components/icons'
setupIcons(app)
// Setup Flags
import setupFlag from './components/flags'
setupFlag(app)

app.mount('#app')
