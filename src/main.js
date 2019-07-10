import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router';
import axios from "axios";
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);


Vue.config.productionTip = false


Vue.prototype.$http = axios.create({
  baseURL:
    "https://mockapi.eolinker.com/t4Ik6Gb9b4bf5cdb7381fe38284a05d44d0631cf253c095"
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
