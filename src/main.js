import Vue from 'vue';
import App from './App';
import router from './router';
import { i18n, setLanguage } from './i18n';

Vue.config.productionTip = false;

/* eslint-disable no-new */
setLanguage().then(() => new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App),
}));