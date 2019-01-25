import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueClazyLoad from "vue-clazy-load";
//import InfiniteLoading from "vue-infinite-loading";
import NProgress from "vue-nprogress";


Vue.use(VueClazyLoad);
const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
};
Vue.use(NProgress, options);

const nprogress = new NProgress();


new Vue({
  router,
  store,
  nprogress,
  render: h => h(App)
}).$mount("#app");
