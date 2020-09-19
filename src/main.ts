import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import './custom.scss'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
