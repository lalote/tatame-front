import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  VueYouTubeEmbed,
  render: h => h(App)
}).$mount('#app')
