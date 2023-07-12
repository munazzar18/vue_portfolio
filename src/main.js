import "../public/assets/css/style.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // Import Bootstrap CSS
import 'bootstrap' // Import Bootstrap JavaScript
import GLightbox from 'glightbox';
import AOS from 'aos';

GLightbox();

AOS.init();

const app = createApp(App)


app.use(router)


app.mount('#app')
