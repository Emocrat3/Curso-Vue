import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/', component: LastArticles},
  {path: '/home', component: LastArticles},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: LastArticles},
  
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
