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
