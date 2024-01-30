import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
// app.config.globalProperties.$http = axios
createApp(App).config.globalProperties.$http = axios
createApp(App).mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// const app = createApp(App)