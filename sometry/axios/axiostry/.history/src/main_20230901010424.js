// import { createApp } from 'vue'
// import App from './App.vue'

// import axios from 'axios'

// createApp(App).config.globalProperties.$http = axios
// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App)
app.use(VueAxios, axios);
