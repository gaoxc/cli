// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import VueI18n from 'vue-i18n';
import App from './App';
import store from './store';
import '@/locale';
import 'normalize.css';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
let env = process.env.NODE_ENV;
const ajaxUrl = env === 'development'
    ? 'http://47.105.45.112'
    : env === 'production'
        ? 'https://www.url.com'
        : 'https://debug.url.com';

Vue.prototype.$http = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
