import './assets/scss/styles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';

import 'aos/dist/aos.css';
import Aos from 'aos';

import 'bootstrap';


const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

Aos.init();
