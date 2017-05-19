// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import {store} from './store';

import 'animate.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,
  store


})
