import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Fighters from './components/Fighters.vue'
import Fighter_profile from './components/Fighter_profile.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fighters',
      name: 'fighters',
      component: Fighters
    },
    {
      path: '/fighter/:id',
      name: 'fighter',
      component: Fighter_profile
    }
  ]
})
