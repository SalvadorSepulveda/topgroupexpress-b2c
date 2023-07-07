import './assets/main.css'

import {createApp} from 'vue'
import {pinia} from './stores'

import App from './App.vue'
import router from './router'
// Setup Icons
import setupIcons from './components/icons'
// Setup Flags
import setupFlag from './components/flags'

const app = createApp(App)

app.use(pinia)
app.use(router)

setupIcons(app)

setupFlag(app)

app.mount('#app')
