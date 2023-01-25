import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue';
import ElementPlus from "element-plus";
import './style.css'
import 'element-plus/dist/index.css';

const routes = [
  { path: '', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
