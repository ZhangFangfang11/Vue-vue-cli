// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
//使用VueResource模块，使用后每个this上都有一个$http的属性
import VueResource from 'vue-resource';
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  ...App
})
