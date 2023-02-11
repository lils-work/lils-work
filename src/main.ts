import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';

import Home from './pages/Home.vue';
import Lab from './pages/Lab.vue';

const routes = [
  { path: '', component: Home },
  { path: '/lab', component: Lab },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
