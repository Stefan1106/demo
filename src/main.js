import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { store } from './store';

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(store);
new Vue({
  store,
  vuetify: new Vuetify({}),
  render: h => h(App),
}).$mount('#app')
