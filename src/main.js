import "../public/assets/css/style.css"
import * as main from "../public/assets/js/main.js"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // Import Bootstrap CSS
import 'bootstrap' // Import Bootstrap JavaScript

const app = createApp(App)

app.use(router)
app.use(main)

app.mount('#app')
