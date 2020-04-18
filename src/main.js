import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import views from "./views";
//import "./assets/styles/reset.css";//或在App.vue中style样式以src引入

Vue.config.productionTip = false;

new Vue({
  router,
  store,
//views,
  render: h => h(App)
}).$mount("#app");
